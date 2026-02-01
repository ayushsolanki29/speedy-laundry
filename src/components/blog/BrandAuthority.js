'use client';

import { motion } from "framer-motion";
import { Award, Building2, Users, Star, CheckCircle, TrendingUp, Clock } from "lucide-react";

const achievements = [
  {
    icon: Award,
    title: "Industry Certified",
    description: "Fully certified laundry professionals with advanced training in fabric care and stain removal techniques."
  },
  {
    icon: Building2,
    title: "Established 2014",
    description: "Over 10 years of trusted service in High Wycombe and surrounding areas with thousands of satisfied customers."
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Dedicated professionals with extensive experience in handling all types of fabrics and garments."
  }
];

const stats = [
  { number: "10+", label: "Years in Business", icon: TrendingUp },
  { number: "5,000+", label: "Happy Customers", icon: Users },
  { number: "4.9/5", label: "Average Rating", icon: Star },
  { number: "24-48h", label: "Turnaround Time", icon: Clock }
];

const certifications = [
  "Professional Dry Cleaning Association",
  "Textile Care Certified",
  "Eco-Friendly Cleaning Standards",
  "Quality Management Systems",
  "Health & Safety Compliant",
  "Customer Service Excellence"
];

const partnerships = [
  {
    name: "High Wycombe Business Association",
    type: "Local Partner",
    description: "Active member supporting local business community"
  },
  {
    name: "Textile Care Alliance",
    type: "Industry Partner", 
    description: "Collaborating for industry best practices"
  },
  {
    name: "Eco-Clean Initiative",
    type: "Environmental Partner",
    description: "Committed to sustainable laundry solutions"
  }
];

const BrandAuthority = () => {
  const serviceImages = [
    "/assets/service-wash.jpg",
    "/assets/service-dryclean.jpg",
    "/assets/service-iron.jpg",
    "/assets/service-fold.jpg"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-header to-header/90 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/assets/pattern.svg')] bg-repeat" />
      </div>
      
      {/* Service Images Background */}
      <div className="absolute inset-0">
        {serviceImages.map((image, index) => (
          <div
            key={index}
            className="absolute opacity-10"
            style={{
              top: `${15 + index * 20}%`,
              right: `${5 + index * 15}%`,
              transform: `translate(50%, -50%) rotate(${-index * 10}deg)`
            }}
          >
            <img
              src={image}
              alt={`Service ${index + 1}`}
              className="w-40 h-40 object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-10 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-20 w-48 h-48 bg-accent/10 rounded-full blur-3xl" />

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Award className="w-8 h-8 text-accent" />
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              Professional Excellence & Brand Authority
            </h2>
          </div>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Speedy Laundry stands as a trusted leader in professional laundry services, 
            combining industry expertise with cutting-edge technology to deliver exceptional results.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20"
              >
                <div className="flex justify-center mb-3">
                  <div className="p-3 bg-accent/20 rounded-full">
                    <stat.icon className="w-6 h-6 text-accent" />
                  </div>
                </div>
                <div className="text-2xl md:text-3xl font-bold text-accent mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-white/70">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements Section */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-accent/20 rounded-full">
                  <achievement.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold">{achievement.title}</h3>
              </div>
              <p className="text-white/80 leading-relaxed">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Certifications & Partnerships */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20"
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-accent" />
              Certifications & Standards
            </h3>
            <div className="space-y-3">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.05 * index }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 p-3 bg-white/5 rounded-xl"
                >
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                  <span className="text-white/90">{cert}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Partnerships */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20"
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Building2 className="w-6 h-6 text-accent" />
              Strategic Partnerships
            </h3>
            <div className="space-y-4">
              {partnerships.map((partner, index) => (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.05 * index }}
                  viewport={{ once: true }}
                  className="p-4 bg-white/5 rounded-xl"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold text-white">{partner.name}</h4>
                    <span className="px-2 py-1 bg-accent/20 text-accent rounded-full text-xs">
                      {partner.type}
                    </span>
                  </div>
                  <p className="text-sm text-white/70">{partner.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-accent/20 to-primary/20 rounded-3xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold mb-4">
              Experience Professional Excellence
            </h3>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust Speedy Laundry for their 
              professional cleaning needs. Our commitment to quality and service excellence 
              sets us apart in the industry.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-accent text-header font-bold px-8 py-4 rounded-full transition-all shadow-lg hover:shadow-xl"
              >
                Schedule Service
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.2)" }}
                whileTap={{ scale: 0.98 }}
                className="bg-white/10 backdrop-blur-md text-white font-semibold px-8 py-4 rounded-full transition-all border border-white/20"
              >
                Learn More
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BrandAuthority;
