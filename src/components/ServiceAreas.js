'use client';

import { motion } from "framer-motion";
import { MapPin, Check } from "lucide-react";
import { useState } from "react";

const serviceAreas = [
  {
    region: "High Wycombe",
    count: "17+ Areas",
    image: "https://images.unsplash.com/photo-1557333610-90ee4a951ecf?w=600&h=800&fit=crop",
    areas: [
      "High Wycombe", "Hazlemere", "Holmer Green", "Hughenden", "Great Kingshill",
      "Little Kingshill", "Naphill", "Prestwood", "Penn", "Tylers Green",
      "Lane End", "Stokenchurch", "Radnage", "Flackwell Heath", "Loudwater",
      "Wooburn Green", "Hyde Heath"
    ]
  },
  {
    region: "Henley-on-Thames",
    count: "25+ Areas",
    image: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=600&h=800&fit=crop",
    areas: [
      "Henley-on-Thames", "Checkenden", "Cookley Green", "Fingest",
      "Highmoor", "Maidensgrove", "Nettlebed", "Northend", "Nuffield",
      "Rotherfield Grays", "Rotherfield Peppard", "Skirmett", "Stoke Row",
      "Stonor", "Turville", "Turville Heath", "Watlington", "Peppard",
      "Harpsden", "Remenham Hill", "Wargrave", "Hurley", "Hambleden", "Frieth"
    ]
  },
  {
    region: "Beaconsfield",
    count: "10+ Areas",
    image: "https://images.unsplash.com/photo-1449156003253-1422027c0067?w=600&h=800&fit=crop",
    areas: [
      "Beaconsfield", "Gerrards Cross", "Amersham",
      "Chesham", "Chalfont St Giles", "Chalfont St Peter", "Little Chalfont",
      "Seer Green", "Penn Street"
    ]
  },
  {
    region: "Maidenhead",
    count: "13+ Areas",
    image: "https://images.unsplash.com/photo-1526678502577-438907f90f33?w=600&h=800&fit=crop",
    areas: [
      "Maidenhead", "Bisham", "Medmenham", "Harleyford Estate", "Marlow",
      "Cookham", "Shiplake", "Kidmore End", "Hook End", "Sonning Common",
      "Mill End", "Binfield Heath", "Speen"
    ]
  }
];

const ServiceAreas = () => {
  return (
    <section id="areas" className="py-24 bg-background overflow-hidden relative">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-primary font-semibold uppercase tracking-[0.2em] text-xs mb-4">Coverage</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Areas We <span className="font-script text-primary">Serve</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg leading-relaxed">
            Premium laundry care delivered to your doorstep. Free pickup & delivery across these regions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {serviceAreas.map((region, regionIdx) => (
            <motion.div
              key={region.region}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: regionIdx * 0.1 }}
              className="group relative h-[400px] rounded-[2rem] overflow-hidden cursor-pointer shadow-xl"
            >
              {/* Image Background */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${region.image})` }}
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="inline-flex bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-3 py-1 text-[10px] font-bold text-white uppercase tracking-widest mb-3 w-fit">
                  Top Local Service
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                  {region.region}
                </h3>
                <p className="text-white/70 text-sm font-medium">
                  Stays in & Around {region.count}
                </p>
              </div>

              {/* Hover Badge */}
              <div className="absolute top-6 right-6">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-lg transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <MapPin className="text-primary w-5 h-5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Not in list CTA - Reimagined */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-24 text-center p-12 bg-secondary/30 rounded-[3rem] border border-border/50 max-w-4xl mx-auto relative overflow-hidden"
        >
          <h3 className="text-2xl font-display font-bold mb-4 relative z-10">
            Don't see your area listed?
          </h3>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto relative z-10 leading-relaxed">
            We are constantly expanding our service routes. Contact us today and we'll see if we can accommodate your location!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
            <a
              href="tel:01494445291"
              className="px-10 py-5 bg-primary text-white rounded-full font-bold hover:scale-105 transition-all shadow-lg flex items-center gap-3"
            >
              Call 01494 445291
            </a>
            <span className="text-muted-foreground font-medium">- OR -</span>
            <a
              href="#contact"
              className="text-primary font-bold hover:underline underline-offset-8"
            >
              Send an Inquiry
            </a>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceAreas;
