'use client';

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useSettings } from "@/context/SettingsContext";

const DEFAULT_ADDRESS = "Abbey House, Lincoln Road\nCressex Business Park, High Wycombe\nBuckinghamshire, HP12 3RD";
const DEFAULT_PHONE = "01494 445291";
const DEFAULT_EMAIL = "info@speedylaundry.co.uk";
const DEFAULT_HOURS = "Mon – Thu: 6:00 AM – 3:00 PM\nFriday: 6:00 AM – 2:00 PM\nWeekends: Closed";

const Contact = () => {
  const settings = useSettings();
  const address = settings.contact_address || DEFAULT_ADDRESS;
  const phone = settings.contact_phone || DEFAULT_PHONE;
  const email = settings.contact_email || DEFAULT_EMAIL;
  const hours = settings.contact_hours || DEFAULT_HOURS;
  return (
    <section id="contact" className="py-12 md:py-20 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-10 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h2 className="text-2xl md:text-4xl font-display font-bold mb-3 md:mb-5">Get In Touch</h2>
            <p className="text-muted-foreground text-sm md:text-base mb-6 md:mb-8">
              Ready to schedule a pickup? Have questions? We&apos;re here to help!
            </p>

            <div className="space-y-4 md:space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 mx-auto sm:mx-0">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="font-bold text-header mb-1 text-sm md:text-base">Address</h3>
                  <p className="text-muted-foreground text-sm whitespace-pre-line">{address}</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 mx-auto sm:mx-0">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="font-bold text-header mb-1 text-sm md:text-base">Phone</h3>
                  <a href={`tel:${phone.replace(/\s/g, '')}`} className="text-primary hover:underline text-sm md:text-base font-medium">
                    {phone}
                  </a>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 mx-auto sm:mx-0">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="font-bold text-header mb-1 text-sm md:text-base">Email</h3>
                  <a href={`mailto:${email}`} className="text-primary hover:underline text-sm">
                    {email}
                  </a>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 mx-auto sm:mx-0">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="font-bold text-header mb-1 text-sm md:text-base">Opening Hours</h3>
                  <p className="text-muted-foreground text-sm whitespace-pre-line">{hours}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form - Reduced size */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl shadow-lg p-4 md:p-8 border border-border"
          >
            <h3 className="text-lg md:text-xl font-bold mb-4 text-center md:text-left">Send Us a Message</h3>

            <form className="space-y-3 md:space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-3 md:gap-4">
                <div>
                  <label className="block text-xs md:text-sm font-medium text-foreground mb-1">Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs md:text-sm font-medium text-foreground mb-1">Phone</label>
                  <input
                    type="tel"
                    placeholder="Your phone"
                    className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs md:text-sm font-medium text-foreground mb-1">Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  suppressHydrationWarning
                  className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm"
                />
              </div>

              <div>
                <label className="block text-xs md:text-sm font-medium text-foreground mb-1">Address</label>
                <input
                  type="text"
                  placeholder="Your address"
                  className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm"
                />
              </div>

              <div>
                <label htmlFor="service-select" className="block text-xs md:text-sm font-medium text-foreground mb-1">Service</label>
                <select id="service-select" className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm">
                  <option value="">Select a service</option>
                  <option value="iron">Iron Only</option>
                  <option value="wash-iron">Wash + Iron</option>
                  <option value="wash-dry-fold">Wash + Dry + Fold</option>
                  <option value="dry-cleaning">Dry Cleaning</option>
                </select>
              </div>

              <div>
                <label className="block text-xs md:text-sm font-medium text-foreground mb-1">Message</label>
                <textarea
                  placeholder="Tell us about your requirements..."
                  rows={3}
                  className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none text-sm"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-2 md:py-3 rounded-full font-semibold hover:brightness-110 transition-all shadow text-sm md:text-base"
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