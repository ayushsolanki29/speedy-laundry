'use client';

import { motion } from "framer-motion";
import { 
  ArrowRight,
  Building2,
  Hotel,
  UtensilsCrossed,
  Dumbbell,
  Heart,
  Scissors,
  Stethoscope,
  Check,
  Phone,
  Clock,
  Truck,
  Leaf,
  Award,
  Shield
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrustedPartners from "@/components/TrustedPartners";

const industries = [
  { icon: Hotel, name: "Hotels & B&Bs" },
  { icon: UtensilsCrossed, name: "Restaurants" },
  { icon: Dumbbell, name: "Gyms & Spas" },
  { icon: Heart, name: "Care Homes" },
  { icon: Scissors, name: "Salons" },
  { icon: Stethoscope, name: "Medical" },
  { icon: Building2, name: "Offices" },
];

export default function BusinessPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero - Clean & Minimal */}
        <section className="pt-28 pb-16 lg:pt-40 lg:pb-24">
          <div className="container">
            <motion.div 
              className="max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary font-semibold text-sm tracking-widest uppercase mb-4 block">
                Commercial Services
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-foreground mb-6 tracking-tight leading-[1.1]">
                Laundry Solutions<br />
                <span className="text-primary">for Business</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-xl mb-10">
                Reliable, high-quality commercial laundry trusted by hotels, restaurants, and businesses across Buckinghamshire.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#quote"
                  className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-8 py-4 rounded-full hover:brightness-110 transition-all"
                >
                  Get a Quote
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a 
                  href="tel:01494445291"
                  className="inline-flex items-center gap-2 bg-muted text-foreground font-semibold px-8 py-4 rounded-full hover:bg-muted/80 transition-all"
                >
                  <Phone className="w-5 h-5" />
                  01494 445291
                </a>
              </div>
            </motion.div>

            {/* Trust indicators */}
            <motion.div 
              className="flex flex-wrap gap-8 lg:gap-12 mt-16 pt-12 border-t border-border"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {[
                { icon: Truck, text: "Free Collection" },
                { icon: Clock, text: "24-48hr Turnaround" },
                { icon: Leaf, text: "Eco-Friendly" },
                { icon: Shield, text: "Quality Guaranteed" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-muted-foreground">
                  <item.icon className="w-5 h-5 text-primary" />
                  <span className="font-medium">{item.text}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        <TrustedPartners />

        {/* Industries - Visual Grid */}
        <section className="py-20 lg:py-32 bg-foreground">
          <div className="container">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
                Who We Serve
              </h2>
              <p className="text-white/60 text-lg">
                Tailored solutions for every industry
              </p>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-4">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-4 rounded-full"
                >
                  <industry.icon className="w-5 h-5 text-primary" />
                  <span className="text-white font-medium">{industry.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 lg:py-32">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-primary font-semibold text-sm tracking-widest uppercase mb-4 block">
                  About Us
                </span>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6 leading-tight">
                  10+ Years of<br />
                  Commercial Excellence
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  What started as a small family business has grown into Buckinghamshire&apos;s trusted commercial laundry partner. We understand the demands of running a business – that&apos;s why we&apos;ve built our service around reliability, quality, and convenience.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  From boutique hotels to busy restaurants, we handle thousands of items weekly with the same care and attention we gave our very first client.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="grid grid-cols-2 gap-6"
              >
                {[
                  { value: "500+", label: "Business Clients" },
                  { value: "10+", label: "Years Experience" },
                  { value: "50k+", label: "Items Weekly" },
                  { value: "100%", label: "Satisfaction Rate" },
                ].map((stat, index) => (
                  <div 
                    key={index}
                    className="bg-muted rounded-2xl p-6 text-center"
                  >
                    <div className="text-3xl md:text-4xl font-display font-bold text-primary mb-1">
                      {stat.value}
                    </div>
                    <div className="text-muted-foreground text-sm">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-12 bg-muted border-y border-border">
          <div className="container">
            <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20">
              {[
                { icon: Award, title: "Miele Professional", subtitle: "Approved Partner" },
                { icon: Leaf, title: "WetCare®", subtitle: "Certified Specialist" },
                { icon: Shield, title: "National Laundry Group", subtitle: "Member" },
              ].map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <cert.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-bold text-foreground">{cert.title}</div>
                    <div className="text-sm text-muted-foreground">{cert.subtitle}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* What We Handle */}
        <section className="py-20 lg:py-32">
          <div className="container">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
                What We Handle
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { 
                  title: "Linens & Bedding", 
                  items: ["Sheets & pillowcases", "Duvet covers", "Mattress protectors", "Blankets & throws"] 
                },
                { 
                  title: "Towels & Textiles", 
                  items: ["Bath & hand towels", "Face cloths", "Robes & slippers", "Spa & gym towels"] 
                },
                { 
                  title: "Uniforms & Workwear", 
                  items: ["Chef whites & aprons", "Staff uniforms", "Medical scrubs", "High-vis & PPE"] 
                },
              ].map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 border border-border"
                >
                  <h3 className="text-xl font-bold text-foreground mb-5">{category.title}</h3>
                  <ul className="space-y-3">
                    {category.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-muted-foreground">
                        <Check className="w-4 h-4 text-primary shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 lg:py-32 bg-secondary/30">
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

            <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                { num: "01", title: "Contact Us", desc: "Tell us your needs" },
                { num: "02", title: "Get Quote", desc: "Custom pricing" },
                { num: "03", title: "Schedule", desc: "Set pickup times" },
                { num: "04", title: "Relax", desc: "We handle the rest" },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-5xl font-display font-bold text-primary/20 mb-3">
                    {step.num}
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-1">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Quote Form */}
        <section id="quote" className="py-20 lg:py-32 bg-foreground">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                  Get Your<br />
                  <span className="text-primary">Free Quote</span>
                </h2>
                <p className="text-white/70 text-lg mb-10">
                  Tell us about your business and we&apos;ll create a tailored laundry solution that fits your needs and budget.
                </p>
                
                <div className="space-y-6">
                  {[
                    "No obligation quote",
                    "Custom pricing for your volume",
                    "Flexible pickup schedules",
                    "Dedicated account manager",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-white/80">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-10 pt-10 border-t border-white/10">
                  <p className="text-white/60 mb-2">Prefer to call?</p>
                  <a 
                    href="tel:01494445291" 
                    className="text-2xl font-display font-bold text-white hover:text-primary transition-colors"
                  >
                    01494 445291
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="bg-white rounded-2xl p-8 lg:p-10">
                  <div className="space-y-5">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Business Name *</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="Your business name"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Contact Name *</label>
                        <input 
                          type="text" 
                          className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Phone *</label>
                        <input 
                          type="tel" 
                          className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                          placeholder="Phone number"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Email *</label>
                      <input 
                        type="email" 
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Industry</label>
                      <select className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all">
                        <option value="">Select your industry</option>
                        <option value="hotel">Hotel / B&B</option>
                        <option value="restaurant">Restaurant / Cafe</option>
                        <option value="gym">Gym / Spa</option>
                        <option value="care">Care Home</option>
                        <option value="salon">Salon / Barber</option>
                        <option value="medical">Medical / Dental</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Tell us about your needs</label>
                      <textarea 
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                        rows={3}
                        placeholder="Approximate volumes, types of items, preferred schedule..."
                      />
                    </div>
                    <button 
                      type="submit"
                      className="w-full bg-primary text-white font-bold py-4 rounded-full hover:brightness-110 transition-all text-lg"
                    >
                      Request Quote
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
