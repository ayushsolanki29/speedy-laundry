'use client';

import { motion } from "framer-motion";
import { MapPin, Check } from "lucide-react";
import { useState } from "react";

const serviceAreas = [
  {
    region: "High Wycombe & Surrounding Areas",
    areas: [
      "High Wycombe", "Hazlemere", "Holmer Green", "Hughenden", "Great Kingshill",
      "Little Kingshill", "Naphill", "Prestwood", "Penn", "Tylers Green",
      "Lane End", "Stokenchurch", "Radnage", "Flackwell Heath", "Loudwater",
      "Wooburn Green", "Hyde Heath"
    ]
  },
  {
    region: "Henley & Surrounding Areas",
    areas: [
      "Henley-on-Thames", "Henley Town", "Checkenden", "Cookley Green", "Fingest",
      "Highmoor", "Maidensgrove", "Nettlebed", "Northend", "Nuffield",
      "Rotherfield Grays", "Rotherfield Peppard", "Skirmett", "Stoke Row",
      "Stonor", "Turville", "Turville Heath", "Watlington", "Peppard",
      "Harpsden", "Remenham Hill", "Wargrave", "Hurley", "Hambleden", "Frieth"
    ]
  },
  {
    region: "Beaconsfield, Amersham & Chalfonts",
    areas: [
      "Beaconsfield", "Beaconsfield Town", "Gerrards Cross", "Amersham",
      "Chesham", "Chalfont St Giles", "Chalfont St Peter", "Little Chalfont",
      "Seer Green", "Penn Street"
    ]
  },
  {
    region: "Maidenhead & Thames Valley",
    areas: [
      "Maidenhead", "Bisham", "Medmenham", "Harleyford Estate", "Marlow",
      "Cookham", "Shiplake", "Kidmore End", "Hook End", "Sonning Common",
      "Mill End", "Binfield Heath", "Speen"
    ]
  }
];

const ServiceAreas = () => {
  const [activeRegion, setActiveRegion] = useState(0);

  return (
    <section id="areas" className="py-24 bg-secondary">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-primary font-semibold uppercase tracking-wider text-sm mb-3">We Deliver To</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Our <span className="font-script text-primary">Service Areas</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Free pickup & delivery across these locations
          </p>
        </motion.div>

        {/* Region tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {serviceAreas.map((region, index) => (
            <button
              key={region.region}
              onClick={() => setActiveRegion(index)}
              className={`px-5 py-3 rounded-full font-medium text-sm transition-all flex items-center ${
                activeRegion === index
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-card text-foreground border border-border hover:border-primary/30"
              }`}
            >
              <MapPin className="w-4 h-4 mr-2" />
              {region.region}
            </button>
          ))}
        </motion.div>

        {/* Areas grid */}
        <motion.div
          key={activeRegion}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-card rounded-3xl p-8 border border-border"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {serviceAreas[activeRegion].areas.map((area, index) => (
              <motion.div
                key={area}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.02 }}
                className="flex items-center gap-2 px-4 py-3 bg-secondary rounded-xl text-sm group hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
              >
                <Check className="w-4 h-4 text-primary group-hover:text-primary-foreground flex-shrink-0" />
                <span>{area}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Not in list CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <p className="text-muted-foreground mb-4">Don&apos;t see your area? Contact us – we may still be able to help!</p>
          <a
            href="tel:01494445291"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
          >
            Call 01494 445291
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceAreas;
