'use client';

import { motion } from "framer-motion";
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
        {/* Hero */}
        <section className="pt-28 pb-12 lg:pt-40 lg:pb-16">
          <div className="container">
            <motion.div 
              className="max-w-2xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-6 tracking-tight">
                Book Your Pickup
              </h1>
              <p className="text-xl text-muted-foreground">
                Schedule a collection or get in touch with our friendly team
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="pb-20 lg:pb-32">
          <div className="container">
            <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
              
              {/* Booking Form */}
              <motion.div 
                className="lg:col-span-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-sm border border-border">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-display font-bold text-foreground">Schedule a Pickup</h2>
                      <p className="text-muted-foreground text-sm">Free collection & delivery</p>
                    </div>
                  </div>

                  <div className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Full Name *
                        </label>
                        <input 
                          type="text" 
                          className="w-full px-4 py-3.5 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Phone Number *
                        </label>
                        <input 
                          type="tel" 
                          className="w-full px-4 py-3.5 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
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
                        className="w-full px-4 py-3.5 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Postcode *
                      </label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3.5 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="e.g. HP12 3RD"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Service Required
                      </label>
                      <select className="w-full px-4 py-3.5 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all">
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
                        className="w-full px-4 py-3.5 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                        rows={4}
                        placeholder="Any special requests or details about your order..."
                      />
                    </div>

                    <button 
                      type="submit"
                      className="w-full bg-primary text-white font-bold py-4 rounded-full hover:brightness-110 transition-all text-lg flex items-center justify-center gap-2"
                    >
                      <Send className="w-5 h-5" />
                      Request Pickup
                    </button>

                    <div className="flex items-center justify-center gap-6 pt-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Truck className="w-4 h-4 text-primary" />
                        Free collection
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        24-48hr turnaround
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Contact Info */}
              <motion.div 
                className="lg:col-span-2 space-y-8"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                {/* Quick Contact */}
                <div className="space-y-4">
                  {contactMethods.map((method, index) => (
                    <a
                      key={index}
                      href={method.href}
                      className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-border hover:border-primary/30 hover:shadow-md transition-all group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                        <method.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <div className="font-bold text-foreground">{method.title}</div>
                        <div className="text-primary font-medium">{method.value}</div>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Address */}
                <div className="bg-white rounded-2xl p-6 border border-border">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-2">Visit Us</h3>
                      <address className="text-muted-foreground not-italic leading-relaxed">
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
                <div className="bg-foreground rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-bold text-white">Opening Hours</h3>
                  </div>
                  <div className="space-y-3">
                    {openingHours.map((item, index) => (
                      <div 
                        key={index} 
                        className={`flex justify-between items-center pb-3 ${
                          index < openingHours.length - 1 ? 'border-b border-white/10' : ''
                        }`}
                      >
                        <span className="text-white/70">{item.day}</span>
                        <span className={`font-medium ${item.hours === 'Closed' ? 'text-white/50' : 'text-white'}`}>
                          {item.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Walk-in Offer */}
                <div className="bg-primary/10 rounded-2xl p-6 border border-primary/20">
                  <div className="text-center">
                    <div className="text-4xl font-display font-bold text-primary mb-2">10% OFF</div>
                    <p className="text-foreground font-medium">Every Walk-In Order</p>
                    <p className="text-muted-foreground text-sm mt-1">Visit us in person for an exclusive discount</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-muted">
          <div className="container">
            <motion.div 
              className="text-center mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-2">Find Us</h2>
              <p className="text-muted-foreground">Cressex Business Park, High Wycombe</p>
            </motion.div>
            
            <motion.div 
              className="rounded-2xl overflow-hidden shadow-lg h-[400px] bg-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2474.5!2d-0.7834!3d51.6234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDM3JzI0LjIiTiAwwrA0Nyczmi4yIlc!5e0!3m2!1sen!2suk!4v1234567890"
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
