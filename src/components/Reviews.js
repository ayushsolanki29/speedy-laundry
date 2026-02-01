'use client';

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Mrs H.",
    location: "Buckinghamshire",
    text: "Reliable, fast, and consistently personalized service. The quality of laundering is consistently excellent.",
    rating: 5,
  },
  {
    name: "Peg S.",
    location: "High Wycombe",
    text: "Really efficient, friendly service. They pick up ironing on Tuesday and bring it back beautifully ironed the next day.",
    rating: 5,
  },
  {
    name: "Poppy G.",
    location: "High Wycombe",
    text: "Extremely efficient! They dry cleaned my wedding dress which was in a sorry state to become looking brand new again!",
    rating: 5,
  },
];

const Reviews = () => {
  return (
    <section id="reviews" className="py-24 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 text-star fill-star" />
              ))}
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">What Our Customers Say</h2>
          <p className="text-muted-foreground">
            <span className="font-semibold text-foreground">4.9</span> rating from 37+ reviews
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-3xl p-8 border border-border shadow-lg"
            >
              <Quote className="w-10 h-10 text-primary/30 mb-6" />
              <p className="text-foreground text-lg mb-6 leading-relaxed">&quot;{review.text}&quot;</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-foreground">{review.name}</p>
                  <p className="text-sm text-muted-foreground">{review.location}</p>
                </div>
                <div className="flex">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-star fill-star" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
