'use client';

import { motion, useInView, useMotionValue, animate } from "framer-motion";
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
    image: "/assets/img-grid/IMG_9081.jpg"
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    image: "/assets/img-grid/20208 - Vodafone - WashCo - B-roll Cutdown.00_28_15_02.Still002.jpg"
  },
  {
    icon: Truck,
    title: "Free Delivery",
    image: "/assets/img-grid/IMG_9083.jpg"
  },
  {
    icon: Clock,
    title: "24-48hr Service",
    image: "/assets/img-grid/259949512_4615477651842803_5580518647924254211_n.jpg"
  },
  {
    icon: Sparkles,
    title: "Eco Practices",
    image: "/assets/img-grid/IMG_9085.jpg"
  },
  {
    icon: Leaf,
    title: "Gentle Care",
    image: "/assets/img-grid/Firefly 20240607092950.png"
  },
  {
    icon: Truck,
    title: "Quick Pickup",
    image: "/assets/img-grid/IMG_9084.jpg"
  },
  {
    icon: Clock,
    title: "Timely Returns",
    image: "/assets/img-grid/20208 - Vodafone - WashCo - B-roll Cutdown.00_35_37_23.Still007.jpg"
  },
  {
    icon: Sparkles,
    title: "Expert Cleaning",
    image: "/assets/img-grid/IMG_9086.jpg"
  },
  {
    icon: Leaf,
    title: "Safe Solvents",
    image: "/assets/img-grid/219863733_6257125504103_5292601337594092513_n.jpg"
  },
  {
    icon: Truck,
    title: "Local Service",
    image: "/assets/img-grid/IMG_9087.jpg"
  },
  {
    icon: Clock,
    title: "Always Ready",
    image: "/assets/img-grid/IMG_9082.jpg"
  }
];

const features = [
  { icon: Users, label: "Expert Team" },
  { icon: Shield, label: "Trusted Service" },
  { icon: Award, label: "Premium Care" },
  { icon: Heart, label: "Customer Love" },
];

export default function About() {
  const sliderX = useMotionValue(0);
  const [progress, setProgress] = useState(10);

  const handleSliderScroll = (direction) => {
    const currentX = sliderX.get();
    const moveAmount = 550 + 48; // Estimate move amount
    let newX = direction === 'next' ? currentX - moveAmount : currentX + moveAmount;

    // Constrain within bounds
    if (newX > 0) newX = 0;
    if (newX < -3200) newX = -3200;

    animate(sliderX, newX, {
      type: "spring",
      stiffness: 300,
      damping: 30
    });
  };

  useEffect(() => {
    return sliderX.on("change", (latest) => {
      const p = Math.max(10, Math.min(100, (Math.abs(latest) / 3200) * 100));
      setProgress(p);
    });
  }, [sliderX]);

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
                  href="/contact"
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

            <div className="relative pb-20 overflow-hidden" style={{ perspective: "1500px" }}>
              <div className="container relative overflow-visible">
                <motion.div
                  className="flex gap-12 px-[10%] items-center cursor-grab active:cursor-grabbing"
                  drag="x"
                  dragConstraints={{
                    right: 0,
                    left: -3200, // Adjusted for 12 large cards
                  }}
                  dragTransition={{ bounceStiffness: 400, bounceDamping: 30 }}
                  style={{
                    transformStyle: "preserve-3d",
                    x: sliderX
                  }}
                  onDrag={(e, info) => sliderX.set(info.point.x)}
                >
                  {values.map((value, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8, rotateY: 30 }}
                      whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      whileHover={{
                        scale: 1.05,
                        translateZ: 50,
                        transition: { duration: 0.4 }
                      }}
                      className="flex-shrink-0 w-[320px] md:w-[550px] aspect-video relative rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] group border border-white/5 bg-foreground/5 backdrop-blur-sm"
                      style={{
                        transformStyle: "preserve-3d",
                      }}
                    >
                      {/* 3D Depth Image */}
                      <div className="absolute inset-0 overflow-hidden">
                        <motion.div
                          className="absolute inset-0"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                        >
                          <Image
                            src={value.image}
                            alt={value.title}
                            fill
                            className="object-cover object-center"
                          />
                        </motion.div>
                      </div>

                      {/* Premium Dynamic Gradient - Lightened for visibility */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent group-hover:via-black/20 transition-all duration-500" />

                      {/* Content with 3D Pop-out effect */}
                      <div className="absolute inset-0 p-10 flex flex-col justify-end translate-z-10">
                        <motion.div
                          className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6 shadow-2xl"
                          whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                        >
                          <value.icon className="w-8 h-8 text-white" />
                        </motion.div>
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-3 tracking-tight drop-shadow-2xl">
                          {value.title}
                        </h3>
                        <div className="h-1 w-12 bg-primary rounded-full mb-4 transform origin-left group-hover:w-24 transition-all duration-500" />
                        <p className="text-white/70 text-base font-medium opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                          Excellence in Every Thread
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Unique Interactive Footer for Slider */}
              <div className="container mt-20">
                <div className="flex flex-col items-center gap-8">
                  <div className="flex items-center gap-6">
                    <span className="h-px w-20 bg-gradient-to-r from-transparent to-primary/30" />
                    <div className="flex items-center gap-3 bg-primary/5 px-6 py-3 rounded-full border border-primary/10 backdrop-blur-md">
                      <button
                        onClick={() => handleSliderScroll('prev')}
                        className="p-1 hover:bg-primary/20 rounded-full transition-colors group/btn"
                        aria-label="Previous Slide"
                      >
                        <motion.div
                          animate={{ x: [-3, 3] }}
                          transition={{ repeat: Infinity, duration: 1.5, repeatType: "reverse" }}
                        >
                          <ArrowRight className="w-5 h-5 text-primary rotate-180 group-hover/btn:scale-120 transition-transform" />
                        </motion.div>
                      </button>
                      <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary/80 px-2 leading-none">
                        Explore Our Legacy
                      </span>
                      <button
                        onClick={() => handleSliderScroll('next')}
                        className="p-1 hover:bg-primary/20 rounded-full transition-colors group/btn"
                        aria-label="Next Slide"
                      >
                        <motion.div
                          animate={{ x: [3, -3] }}
                          transition={{ repeat: Infinity, duration: 1.5, repeatType: "reverse" }}
                        >
                          <ArrowRight className="w-5 h-5 text-primary group-hover/btn:scale-120 transition-transform" />
                        </motion.div>
                      </button>
                    </div>
                    <span className="h-px w-20 bg-gradient-to-l from-transparent to-primary/30" />
                  </div>

                  {/* Neon Progress Bar */}
                  <div className="w-48 h-1 bg-white/5 rounded-full relative overflow-hidden">
                    <motion.div
                      className="absolute inset-y-0 left-0 bg-primary shadow-[0_0_15px_rgba(var(--primary-rgb),0.5)]"
                      animate={{ width: `${progress}%` }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  </div>
                </div>
              </div>
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

        {/* Promise Section - Theme Sync Layout */}
        <section className="py-24 bg-foreground overflow-hidden">
          <div className="container px-6">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Left Side: Brand Promise */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-[0.3em] mb-6">
                  <Shield className="w-4 h-4" />
                  Quality Certified
                </div>
                <h2 className="text-5xl md:text-7xl font-display font-bold text-white leading-tight mb-8">
                  The Speedy<br />
                  Promise<span className="text-primary">.</span>
                </h2>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 text-white font-bold hover:text-primary transition-all text-lg"
                >
                  Book Your Experience
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </Link>
              </motion.div>

              {/* Right Side: Statement */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="relative lg:pl-12 lg:border-l border-white/10"
              >
                <div className="text-6xl text-primary font-serif absolute -top-10 -left-4 hidden lg:block">&quot;</div>
                <p className="text-2xl md:text-3xl font-display font-bold text-white mb-8 leading-snug">
                  Your satisfaction isn&apos;t just our goal – it&apos;s our <span className="font-script text-primary inline mt-2 text-4xl">promise.</span>
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-px w-8 bg-primary" />
                  <p className="text-xl text-white font-script italic">
                    The Speedy Laundry Team
                  </p>
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
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-white font-bold px-10 py-5 rounded-full hover:brightness-110 transition-all shadow-lg text-lg"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/services"
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
