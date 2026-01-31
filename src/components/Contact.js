'use client';

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-muted">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Get In Touch</h2>
            <p className="text-muted-foreground text-lg mb-10">
              Ready to schedule a pickup? Have questions? We're here to help!
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">Address</h4>
                  <p className="text-muted-foreground">
                    Abbey House, Lincoln Road<br />
                    Cressex Business Park, High Wycombe<br />
                    Buckinghamshire, HP12 3RD
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">Phone</h4>
                  <a href="tel:01494445291" className="text-primary hover:underline text-lg font-medium">
                    01494 445291
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">Email</h4>
                  <a href="mailto:info@speedylaundry.co.uk" className="text-primary hover:underline">
                    info@speedylaundry.co.uk
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">Opening Hours</h4>
                  <p className="text-muted-foreground">
                    Mon – Thu: 6:00 AM – 3:00 PM<br />
                    Friday: 6:00 AM – 2:00 PM<br />
                    Weekends: Closed
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-3xl shadow-xl p-8 md:p-10 border border-border"
          >
            <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>

            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-5 py-4 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
                  <input
                    type="tel"
                    placeholder="Your phone"
                    className="w-full px-5 py-4 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-5 py-4 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Address</label>
                <input
                  type="text"
                  placeholder="Your address"
                  className="w-full px-5 py-4 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Service</label>
                <select className="w-full px-5 py-4 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all">
                  <option value="">Select a service</option>
                  <option value="iron">Iron Only</option>
                  <option value="wash-iron">Wash + Iron</option>
                  <option value="wash-dry-fold">Wash + Dry + Fold</option>
                  <option value="dry-cleaning">Dry Cleaning</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                <textarea
                  placeholder="Tell us about your requirements..."
                  rows={4}
                  className="w-full px-5 py-4 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-4 rounded-full font-semibold hover:brightness-110 transition-all shadow-lg"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
