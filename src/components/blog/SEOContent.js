'use client';

import { motion } from "framer-motion";
import { Search, TrendingUp, MapPin, CheckCircle } from "lucide-react";

const seoTopics = [
  {
    keyword: "Laundry Service High Wycombe",
    searches: "1,200+ monthly searches",
    description: "Professional laundry and dry cleaning services in High Wycombe with free pickup and delivery."
  },
  {
    keyword: "Wash and Fold Service",
    searches: "800+ monthly searches", 
    description: "Convenient wash and fold laundry service with 24-48 hour turnaround time."
  },
  {
    keyword: "Dry Cleaning Near Me",
    searches: "2,500+ monthly searches",
    description: "Expert dry cleaning for suits, dresses, and delicate fabrics in your local area."
  },
  {
    keyword: "Laundry Pickup Delivery",
    searches: "600+ monthly searches",
    description: "Free pickup and delivery laundry service saving you time and effort."
  },
  {
    keyword: "Wedding Dress Cleaning",
    searches: "400+ monthly searches",
    description: "Professional wedding dress preservation and cleaning services."
  },
  {
    keyword: "Commercial Laundry Service",
    searches: "300+ monthly searches",
    description: "Business laundry solutions for hotels, restaurants, and offices."
  }
];

const serviceAreas = [
  "High Wycombe", "Beaconsfield", "Marlow", "Amersham", 
  "Gerrards Cross", "Chalfont St Peter", "Slough", "Uxbridge"
];

const SEOContent = () => {
  const serviceImages = [
    "/assets/service-wash.jpg",
    "/assets/service-dryclean.jpg",
    "/assets/service-iron.jpg",
    "/assets/service-fold.jpg"
  ];

  return (
    <section className="py-20 bg-secondary/50">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Search className="w-8 h-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              SEO-Optimized Content
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover why Speedy Laundry is the top-rated laundry service in High Wycombe and surrounding areas. 
            Our expert content helps you find the perfect laundry solutions for your needs.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Keywords Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <TrendingUp className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-bold text-foreground">Popular Search Topics</h3>
              </div>
              
              {/* Service Images */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {serviceImages.slice(0, 4).map((image, index) => (
                  <div key={index} className="relative h-24 rounded-lg overflow-hidden">
                    <img
                      src={image}
                      alt={`Service ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              
              <div className="space-y-4">
                {seoTopics.map((topic, index) => (
                  <motion.div
                    key={topic.keyword}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    className="border border-border rounded-2xl p-4 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-foreground">{topic.keyword}</h4>
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                        {topic.searches}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{topic.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Service Areas & Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Service Areas */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-bold text-foreground">Service Areas</h3>
              </div>
              
              <p className="text-muted-foreground mb-4">
                We provide professional laundry services across these locations:
              </p>
              
              <div className="grid grid-cols-2 gap-3">
                {serviceAreas.map((area, index) => (
                  <motion.div
                    key={area}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.05 * index }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2 p-3 bg-secondary rounded-xl"
                  >
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm font-medium text-foreground">{area}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* SEO Benefits */}
            <div className="bg-gradient-to-br from-primary to-primary/80 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Why Choose Speedy Laundry?</h3>
              
              <div className="space-y-4">
                {[
                  "✓ 5-Star Rated Service with 37+ Reviews",
                  "✓ Free Pickup & Delivery Across High Wycombe",
                  "✓ 24-48 Hour Turnaround Guarantee",
                  "✓ Eco-Friendly Cleaning Methods",
                  "✓ Expert Stain Removal Specialists",
                  "✓ Affordable Transparent Pricing"
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="font-medium">{benefit.substring(2)}</span>
                  </motion.div>
                ))}
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="mt-8"
              >
                <p className="text-white/80 text-sm mb-4">
                  Looking for "laundry service near me" or "dry cleaning High Wycombe"? 
                  Speedy Laundry offers professional cleaning solutions with convenient pickup and delivery.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Best Laundry Service", "Professional Dry Cleaning", "Affordable Laundry", "Quick Turnaround"].map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-white/20 rounded-full text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom SEO Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-3xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-foreground mb-4">
              Professional Laundry Services in High Wycombe
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Speedy Laundry is your trusted partner for professional laundry and dry cleaning services in High Wycombe. 
              Whether you need wash and fold services, delicate fabric care, or commercial laundry solutions, 
              our expert team delivers exceptional results with free pickup and delivery. Contact us today to experience 
              the best laundry service in the area!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SEOContent;
