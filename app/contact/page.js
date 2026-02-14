'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  Truck,
  Calendar
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const contactMethods = [
  {
    icon: Phone,
    title: "Call Us",
    value: "01494 445291",
    href: "tel:01494445291",
    desc: "Speak directly with our team"
  },
  {
    icon: Mail,
    title: "Email Us",
    value: "info@speedylaundry.co.uk",
    href: "mailto:info@speedylaundry.co.uk",
    desc: "We reply within 24 hours"
  },
];

const openingHours = [
  { day: "Monday – Thursday", hours: "6:00 AM – 3:00 PM" },
  { day: "Friday", hours: "6:00 AM – 2:00 PM" },
  { day: "Saturday & Sunday", hours: "Closed" },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero - Premium Design matching About & Services */}
        <section className="relative h-[55vh] sm:h-[65vh] min-h-[450px] sm:min-h-[550px] flex items-center overflow-hidden pt-16 sm:pt-20">
          <div className="absolute inset-0">
            <Image
              src="/assets/contact/contact-bg.png"
              alt="Professional laundry service"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/80 to-transparent" />
          </div>

          <div className="container relative z-10 px-4 sm:px-6">
            <motion.div
              className="max-w-3xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-primary/20"
              >
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="text-white font-medium text-xs sm:text-sm">Ready to Care for Your Garments</span>
              </motion.div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight">
                Book Your <br />
                <span className="text-primary italic">Pickup.</span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-white/70 mb-8 max-w-xl">
                Schedule a collection or get in touch with our friendly team. We treat every garment with the care it deserves.
              </p>

              {/* Trust indicators for site-wide consistency */}
              <div className="flex flex-wrap gap-4 sm:gap-8">
                {[
                  { icon: Truck, text: "Free Collections" },
                  { icon: CheckCircle, text: "Quality Certified" },
                  { icon: Phone, text: "Live Assistance" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-white/90 bg-white/5 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/10">
                    <item.icon className="w-4 h-4 text-primary" />
                    <span className="font-semibold text-[10px] sm:text-xs uppercase tracking-wider">{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Main Content - Perfected spacing */}
        <section className="py-12 sm:py-16 md:py-20">
          <div className="container">
            <div className="grid lg:grid-cols-5 gap-8 lg:gap-16">

              {/* Booking Form - Reduced padding on mobile */}
              <motion.div
                className="lg:col-span-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="bg-white rounded-2xl lg:rounded-3xl p-5 sm:p-6 lg:p-10 shadow-sm border border-border">
                  <div className="flex items-center gap-3 mb-6 lg:mb-8">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Calendar className="w-5 lg:w-6 h-5 lg:h-6 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-xl lg:text-2xl font-display font-bold text-foreground">Schedule a Pickup</h2>
                      <p className="text-muted-foreground text-sm">Free collection & delivery</p>
                    </div>
                  </div>

                  <div className="space-y-4 lg:space-y-5">
                    <div className="grid sm:grid-cols-2 gap-4 lg:gap-5">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          className="w-full px-3 lg:px-4 py-2.5 lg:py-3.5 rounded-lg lg:rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm lg:text-base"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          className="w-full px-3 lg:px-4 py-2.5 lg:py-3.5 rounded-lg lg:rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm lg:text-base"
                          placeholder="Your phone"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        className="w-full px-3 lg:px-4 py-2.5 lg:py-3.5 rounded-lg lg:rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm lg:text-base"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Postcode *
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 lg:px-4 py-2.5 lg:py-3.5 rounded-lg lg:rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm lg:text-base"
                        placeholder="e.g. HP12 3RD"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Service Required
                      </label>
                      <select className="w-full px-3 lg:px-4 py-2.5 lg:py-3.5 rounded-lg lg:rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm lg:text-base">
                        <option value="">Select a service</option>
                        <option value="iron">Iron Only</option>
                        <option value="wash-iron">Wash + Iron</option>
                        <option value="wash-dry-fold">Wash, Dry & Fold</option>
                        <option value="dry-cleaning">Dry Cleaning</option>
                        <option value="commercial">Commercial / Business</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Message (Optional)
                      </label>
                      <textarea
                        className="w-full px-3 lg:px-4 py-2.5 lg:py-3.5 rounded-lg lg:rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none text-sm lg:text-base"
                        rows={3}
                        placeholder="Any special requests or details about your order..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-primary text-white font-bold py-3 lg:py-4 rounded-full hover:brightness-110 transition-all text-base lg:text-lg flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 lg:w-5 h-4 lg:h-5" />
                      Request Pickup
                    </button>

                    <div className="flex flex-wrap items-center justify-center gap-4 lg:gap-6 pt-3 lg:pt-4 text-xs lg:text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Truck className="w-3 lg:w-4 h-3 lg:h-4 text-primary" />
                        Free collection
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-3 lg:w-4 h-3 lg:h-4 text-primary" />
                        24-48hr turnaround
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                className="lg:col-span-2 space-y-6 lg:space-y-8"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                {/* Quick Contact */}
                <div className="space-y-3 lg:space-y-4">
                  {contactMethods.map((method, index) => (
                    <a
                      key={index}
                      href={method.href}
                      className="flex items-center gap-3 lg:gap-4 p-4 lg:p-5 bg-white rounded-xl lg:rounded-2xl border border-border hover:border-primary/30 hover:shadow-md transition-all group"
                    >
                      <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-lg lg:rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                        <method.icon className="w-5 lg:w-6 h-5 lg:h-6 text-primary group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <div className="font-bold text-foreground text-sm lg:text-base">{method.title}</div>
                        <div className="text-primary font-medium text-sm lg:text-base">{method.value}</div>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Address */}
                <div className="bg-white rounded-xl lg:rounded-2xl p-4 lg:p-6 border border-border">
                  <div className="flex items-start gap-3 lg:gap-4 mb-3 lg:mb-4">
                    <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-4 lg:w-5 h-4 lg:h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1 lg:mb-2 text-sm lg:text-base">Visit Us</h3>
                      <address className="text-muted-foreground not-italic leading-relaxed text-sm lg:text-base">
                        Speedy Laundry<br />
                        Abbey House, Lincoln Road<br />
                        Cressex Business Park<br />
                        High Wycombe<br />
                        Buckinghamshire<br />
                        <span className="font-medium text-foreground">HP12 3RD</span>
                      </address>
                    </div>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="bg-foreground rounded-xl lg:rounded-2xl p-4 lg:p-6">
                  <div className="flex items-center gap-3 mb-4 lg:mb-5">
                    <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-lg bg-white/10 flex items-center justify-center">
                      <Clock className="w-4 lg:w-5 h-4 lg:h-5 text-primary" />
                    </div>
                    <h3 className="font-bold text-white text-sm lg:text-base">Opening Hours</h3>
                  </div>
                  <div className="space-y-2 lg:space-y-3">
                    {openingHours.map((item, index) => (
                      <div
                        key={index}
                        className={`flex flex-col xs:flex-row xs:justify-between xs:items-center pb-2 lg:pb-3 ${index < openingHours.length - 1 ? 'border-b border-white/10' : ''
                          }`}
                      >
                        <span className="text-white/70 text-sm lg:text-base">{item.day}</span>
                        <span className={`font-medium text-sm lg:text-base ${item.hours === 'Closed' ? 'text-white/50' : 'text-white'}`}>
                          {item.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* New Related Quote */}
                <div className="bg-primary/5 rounded-2xl p-6 lg:p-8 border border-primary/10 relative overflow-hidden group">
                  <div className="relative z-10">
                    <p className="text-foreground italic text-base lg:text-lg leading-relaxed mb-4">
                      &ldquo;Great service starts with a simple conversation. We treat every garment with the precision and care it deserves.&rdquo;
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="h-px w-8 bg-primary" />
                      <span className="font-script text-primary text-xl lg:text-2xl">The Speedy Laundry Team</span>
                    </div>
                  </div>
                  {/* Decorative background element */}
                  <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all duration-500" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-12 lg:py-16 bg-muted">
          <div className="container">
            <motion.div
              className="text-center mb-6 lg:mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl lg:text-3xl font-display font-bold text-foreground mb-2">Find Us</h2>
              <p className="text-muted-foreground text-sm lg:text-base">Cressex Business Park, High Wycombe</p>
            </motion.div>

            <motion.div
              className="rounded-xl lg:rounded-2xl overflow-hidden shadow-lg h-[300px] lg:h-[400px] bg-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1611.06198871445!2d-0.7723896769905402!3d51.62617703354082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48768a6e2e0602d9%3A0x9e4b79a6c2514294!2sSpeedy%20Laundry!5e1!3m2!1sen!2suk!4v1770908455969!5m2!1sen!2suk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Speedy Laundry Location"
              />
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}