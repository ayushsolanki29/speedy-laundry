'use client';

import { motion } from "framer-motion";
import { BookOpen, Droplets, Shield, Clock, Award, Users } from "lucide-react";

const educationTopics = [
  {
    icon: Droplets,
    title: "Understanding Water Temperature",
    description: "Learn when to use hot, warm, or cold water for different fabrics and stains.",
    tips: [
      "Cold water: Delicates, dark colors, energy-saving",
      "Warm water: Everyday clothes, moderately soiled items",
      "Hot water: Whites, heavily soiled items, sanitizing"
    ]
  },
  {
    icon: Shield,
    title: "Fabric Protection Techniques",
    description: "Essential methods to protect your clothes during washing and drying.",
    tips: [
      "Use mesh bags for delicates and small items",
      "Turn clothes inside out to prevent pilling",
      "Zip zippers and button buttons to prevent snagging"
    ]
  },
  {
    icon: Clock,
    title: "Timing & Frequency Guide",
    description: "How often to wash different items for optimal care and longevity.",
    tips: [
      "Jeans: Every 4-5 wears",
      "Sweaters: Every 5-7 wears",
      "Bedding: Every 1-2 weeks",
      "Towels: Every 3-4 uses"
    ]
  }
];

const careGuides = [
  {
    category: "Delicate Fabrics",
    items: ["Silk", "Wool", "Cashmere", "Lace"],
    care: "Hand wash or dry clean only. Use mild detergent and cold water."
  },
  {
    category: "Everyday Items",
    items: ["Cotton", "Polyester", "Linen", "Denim"],
    care: "Machine wash warm. Tumble dry medium or hang to dry."
  },
  {
    category: "Special Items",
    items: ["Suits", "Wedding Dresses", "Curtains", "Upholstery"],
    care: "Professional dry cleaning recommended for best results."
  }
];

const CustomerEducation = () => {
  const serviceImages = [
    "/assets/service-wash.jpg",
    "/assets/service-dryclean.jpg",
    "/assets/service-iron.jpg",
    "/assets/service-fold.jpg"
  ];

  return (
    <section className="py-20 bg-background">
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
            <BookOpen className="w-8 h-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Customer Education Center
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Build your laundry knowledge with expert tips and comprehensive guides.
            Learn the best practices to keep your clothes looking new longer.
          </p>
        </motion.div>

        {/* Education Topics */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {educationTopics.map((topic, index) => (
            <motion.div
              key={topic.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="card-premium overflow-hidden h-full flex flex-col"
            >
              {/* Service Image */}
              <div className="relative h-28 md:h-32 overflow-hidden">
                <img
                  src={serviceImages[index % serviceImages.length]}
                  alt={`Service ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              <div className="p-5 md:p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 bg-primary/10 rounded-full">
                    <topic.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-foreground leading-tight">{topic.title}</h3>
                </div>

                <p className="text-sm text-muted-foreground mb-6 line-clamp-3 md:line-clamp-none">{topic.description}</p>

                <div className="space-y-3 mt-auto">
                  {topic.tips.map((tip, tipIndex) => (
                    <motion.div
                      key={tipIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.2 + tipIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-2.5 md:gap-3"
                    >
                      <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-primary rounded-full mt-1.5 md:mt-2 flex-shrink-0" />
                      <span className="text-xs md:text-sm text-foreground leading-relaxed">{tip}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Care Guides Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16"
        >
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl md:rounded-3xl p-6 md:p-10 shadow-inner">
            <h3 className="text-xl md:text-2xl font-bold text-header mb-6 md:mb-10 text-center">
              Fabric Care Guides
            </h3>

            <div className="grid md:grid-cols-3 gap-5 md:gap-6">
              {careGuides.map((guide, index) => (
                <motion.div
                  key={guide.category}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl md:rounded-2xl p-5 md:p-6 shadow-sm border border-header/5"
                >
                  <h4 className="text-base md:text-lg font-bold text-primary mb-3">{guide.category}</h4>

                  <div className="flex flex-wrap gap-1.5 md:gap-2 mb-4">
                    {guide.items.map((item) => (
                      <span
                        key={item}
                        className="px-2.5 py-1 bg-secondary text-secondary-foreground rounded-full text-[10px] md:text-xs font-semibold"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{guide.care}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Trust Building Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
              Why Trust Our Expert Advice?
            </h3>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-primary/10 rounded-full">
                    <Award className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h4 className="text-lg font-bold text-foreground mb-2">Industry Certified</h4>
                <p className="text-sm text-muted-foreground">
                  Our team holds professional certifications in fabric care and laundry management
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-primary/10 rounded-full">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h4 className="text-lg font-bold text-foreground mb-2">10+ Years Experience</h4>
                <p className="text-sm text-muted-foreground">
                  Serving thousands of customers with expert laundry solutions since 2014
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-primary/10 rounded-full">
                    <Shield className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h4 className="text-lg font-bold text-foreground mb-2">Guaranteed Results</h4>
                <p className="text-sm text-muted-foreground">
                  All our advice is tested and proven to deliver the best laundry results
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-8 text-center"
            >
              <div className="bg-accent/10 rounded-2xl p-6">
                <p className="text-foreground font-medium mb-4">
                  Have a specific laundry question? Our experts are here to help!
                </p>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary"
                >
                  Ask an Expert
                </motion.button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CustomerEducation;
