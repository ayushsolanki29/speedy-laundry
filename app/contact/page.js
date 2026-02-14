'use client';

import { useState } from "react";
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
  Calendar,
  Loader2
} from "lucide-react";
import { toast } from "sonner";
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
  const [formData, setFormData] = useState({
    full_name: '',
    phone: '',
    email: '',
    postcode: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Client-side validation
    if (formData.phone.length > 30) {
      toast.error('Phone number is too long (max 30 characters)');
      return;
    }
    if (formData.postcode.length > 20) {
      toast.error('Postcode is too long (max 20 characters)');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contact.php`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.status === 'success') {
        toast.success(data.message);
        setFormData({
          full_name: '',
          phone: '',
          email: '',
          postcode: '',
          service: '',
          message: ''
        });
      } else {
        toast.error(data.message || 'Submission failed. Please check your inputs.');
      }
    } catch (error) {
      toast.error('Failed to connect to server. Please try again.');
      console.error('Contact error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Header />

      <main>
        {/* Hero Section */}
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

          <div className="container relative z-10 px-4 sm:px-6 mx-auto">
            <motion.div
              className="max-w-3xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-primary/20">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="text-white font-medium text-xs sm:text-sm">Ready to Care for Your Garments</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight">
                Book Your <br />
                <span className="text-primary italic">Pickup.</span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-white/70 mb-8 max-w-xl">
                Schedule a collection or get in touch with our friendly team. We treat every garment with the care it deserves.
              </p>

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

        {/* Form and Info Section */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">

              {/* Form Column */}
              <motion.div
                className="lg:col-span-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-12 shadow-xl shadow-black/5 border border-border/50">
                  <div className="flex items-center gap-4 mb-10">
                    <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <Calendar className="w-6 lg:w-7 h-6 lg:h-7 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-2xl lg:text-3xl font-display font-bold text-foreground">Schedule a Pickup</h2>
                      <p className="text-muted-foreground text-sm lg:text-base">Free collection & delivery service</p>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6 lg:space-y-8">
                    <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-foreground/80 ml-1">Full Name *</label>
                        <input
                          type="text"
                          name="full_name"
                          value={formData.full_name}
                          onChange={handleChange}
                          required
                          className="w-full px-5 py-4 rounded-2xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-base"
                          placeholder="Your name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-foreground/80 ml-1">Phone Number *</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-5 py-4 rounded-2xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-base"
                          placeholder="Your phone"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-foreground/80 ml-1">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-5 py-4 rounded-2xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-base"
                          placeholder="your@email.com"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-foreground/80 ml-1">Postcode *</label>
                        <input
                          type="text"
                          name="postcode"
                          value={formData.postcode}
                          onChange={handleChange}
                          required
                          className="w-full px-5 py-4 rounded-2xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-base"
                          placeholder="e.g. HP12 3RD"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-foreground/80 ml-1">Service Required</label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-5 py-4 rounded-2xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-base cursor-pointer"
                      >
                        <option value="">Select a service</option>
                        <option value="iron">Iron Only</option>
                        <option value="wash-iron">Wash + Iron</option>
                        <option value="wash-dry-fold">Wash, Dry & Fold</option>
                        <option value="dry-cleaning">Dry Cleaning</option>
                        <option value="commercial">Commercial / Business</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-foreground/80 ml-1">Message (Optional)</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-5 py-4 rounded-2xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none text-base"
                        rows={4}
                        placeholder="Any special requests or details about your order..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary text-white font-bold py-4 lg:py-5 rounded-2xl hover:brightness-110 active:scale-[0.99] transition-all text-lg flex items-center justify-center gap-3 shadow-lg shadow-primary/20 disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-6 h-6 animate-spin" />
                          <span>Processing...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          <span>Request Pickup</span>
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </motion.div>

              {/* Info Column */}
              <motion.div
                className="lg:col-span-2 space-y-8"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
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
                        className={`flex justify-between items-center pb-3 ${index < openingHours.length - 1 ? 'border-b border-white/10' : ''}`}
                      >
                        <span className="text-white/70 text-sm">{item.day}</span>
                        <span className={`font-medium text-sm ${item.hours === 'Closed' ? 'text-white/50' : 'text-white'}`}>
                          {item.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-primary/5 rounded-2xl p-8 border border-primary/10 relative overflow-hidden group">
                  <div className="relative z-10">
                    <p className="text-foreground italic text-lg leading-relaxed mb-4">
                      &ldquo;Great service starts with a simple conversation. We treat every garment with the precision and care it deserves.&rdquo;
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="h-px w-8 bg-primary" />
                      <span className="font-script text-primary text-2xl">The Speedy Laundry Team</span>
                    </div>
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all duration-500" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-12 lg:py-16 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
              className="rounded-3xl overflow-hidden shadow-lg h-[400px] bg-white border border-border"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
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