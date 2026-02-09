'use client';

import { motion } from "framer-motion";
import { Clock, User, ArrowRight, Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const blogPosts = [
  {
    id: 1,
    title: "10 Common Laundry Mistakes You're Probably Making",
    excerpt: "Discover the most frequent laundry errors that damage your clothes and how to avoid them for longer-lasting garments.",
    author: "Sarah Johnson",
    date: "January 15, 2024",
    readTime: "5 min read",
    category: "Laundry Tips",
    image: "/assets/blog/laundry-mistakes.jpg",
    featured: true,
    slug: "10-common-laundry-mistakes"
  },
  {
    id: 2,
    title: "The Ultimate Guide to Removing Tough Stains",
    excerpt: "Professional techniques for removing wine, coffee, grass, and oil stains from all types of fabrics.",
    author: "Mike Chen",
    date: "January 12, 2024",
    readTime: "8 min read",
    category: "Stain Removal",
    image: "/assets/blog/stain-removal.jpg",
    slug: "ultimate-stain-removal-guide"
  },
  {
    id: 3,
    title: "Fabric Care 101: Understanding Clothing Labels",
    excerpt: "Decode those mysterious laundry symbols and learn the right way to care for different fabric types.",
    author: "Emma Davis",
    date: "January 10, 2024",
    readTime: "6 min read",
    category: "Fabric Care",
    image: "/assets/blog/fabric-care.jpg",
    slug: "fabric-care-101"
  },
  {
    id: 4,
    title: "Eco-Friendly Laundry: Save Money and the Planet",
    excerpt: "Simple switches to make your laundry routine more sustainable without compromising on cleanliness.",
    author: "Green Team",
    date: "January 8, 2024",
    readTime: "7 min read",
    category: "Sustainability",
    image: "/assets/blog/eco-laundry.jpg",
    slug: "eco-friendly-laundry"
  },
  {
    id: 5,
    title: "Winter Wardrobe Care: Sweater Storage & Maintenance",
    excerpt: "Keep your winter knits looking new season after season with these expert care tips.",
    author: "Lisa Park",
    date: "January 5, 2024",
    readTime: "5 min read",
    category: "Seasonal Care",
    image: "/assets/blog/winter-care.jpg",
    slug: "winter-wardrobe-care"
  },
  {
    id: 6,
    title: "The Science of Detergent: What Really Works",
    excerpt: "Understanding different detergent types and how to choose the right one for your needs.",
    author: "Dr. James Wilson",
    date: "January 3, 2024",
    readTime: "9 min read",
    category: "Products",
    image: "/assets/blog/detergent-science.jpg",
    slug: "science-of-detergent"
  }
];

const BlogPosts = () => {
  const router = useRouter();
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

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
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Latest Laundry Tips & Insights
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expert advice to help you achieve perfect results every time
          </p>
        </motion.div>

        {/* Featured Post */}
        {featuredPost && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="mb-12 md:mb-16"
          >
            <div className="card-premium p-5 md:p-10">
              <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
                <div className="relative h-56 md:h-80 rounded-xl md:rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
                  <img
                    src="/assets/service-wash.jpg"
                    alt="Washing Service"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-3 md:mb-4">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs md:sm font-medium">
                      {featuredPost.category}
                    </span>
                    <span className="text-muted-foreground text-xs md:sm">Featured</span>
                  </div>

                  <h3 className="text-xl md:text-3xl font-bold text-foreground mb-3 md:mb-4 leading-tight">
                    {featuredPost.title}
                  </h3>

                  <p className="text-sm md:text-base text-muted-foreground mb-5 md:mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 md:gap-6 mb-5 md:mb-6 text-xs md:text-sm text-muted-foreground">
                    <div className="flex items-center gap-1.5 md:gap-2">
                      <User className="w-3.5 h-3.5 md:w-4 md:h-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center gap-1.5 md:gap-2">
                      <Calendar className="w-3.5 h-3.5 md:w-4 md:h-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5 md:gap-2">
                      <Clock className="w-3.5 h-3.5 md:w-4 md:h-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-primary w-full md:w-auto inline-flex justify-center items-center gap-2 py-3"
                    onClick={() => router.push(`/blog/${featuredPost.slug}`)}
                  >
                    Read Full Article
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Regular Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {regularPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              viewport={{ once: true }}
              className="card-premium overflow-hidden group cursor-pointer flex flex-col"
            >
              {/* Image */}
              <div className="relative h-44 md:h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />
                <img
                  src={index === 0 ? "/assets/service-dryclean.jpg" :
                    index === 1 ? "/assets/service-iron.jpg" :
                      "/assets/service-fold.jpg"}
                  alt="Service"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-primary rounded-full text-[10px] md:text-xs font-medium uppercase tracking-wider">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 md:p-6 flex flex-col flex-grow">
                <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 md:mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="mt-auto pt-4 border-t border-border/50">
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <User className="w-3 h-3 text-primary" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3 h-3 text-primary" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <motion.div
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-2 text-primary text-sm font-bold cursor-pointer"
                    onClick={() => router.push(`/blog/${post.slug}`)}
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="btn-accent"
          >
            Load More Articles
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogPosts;
