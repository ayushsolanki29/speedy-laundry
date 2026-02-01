'use client';

import { motion } from "framer-motion";
import { BookOpen, ArrowRight, Clock, User } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const blogPosts = [
  {
    id: 1,
    title: "10 Common Laundry Mistakes",
    excerpt: "Discover frequent errors that damage your clothes",
    author: "Sarah Johnson",
    readTime: "5 min read",
    category: "Laundry Tips",
    slug: "10-common-laundry-mistakes"
  },
  {
    id: 2,
    title: "Ultimate Stain Removal Guide",
    excerpt: "Professional techniques for tough stains",
    author: "Mike Chen",
    readTime: "8 min read",
    category: "Stain Removal",
    slug: "ultimate-stain-removal-guide"
  },
  {
    id: 3,
    title: "Fabric Care 101",
    excerpt: "Decode laundry symbols and fabric types",
    author: "Emma Davis",
    readTime: "6 min read",
    category: "Fabric Care",
    slug: "fabric-care-101"
  }
];

const BlogSection = ({ showHeader = true }) => {
  const router = useRouter();
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container">
        {/* Section Header */}
        {showHeader && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <BookOpen className="w-6 h-6 text-primary" />
              <h2 className="text-3xl font-display font-bold text-foreground">
                Laundry Tips & Insights
              </h2>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Expert advice to help you achieve perfect laundry results every time
            </p>
          </motion.div>
        )}

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
            >
              {/* Category Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                  {post.category}
                </span>
                <div className="text-2xl text-primary/20 group-hover:text-primary/30 transition-colors">
                  🧺
                </div>
              </div>
              
              {/* Content */}
              <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              
              <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                {post.excerpt}
              </p>
              
              {/* Meta Info */}
              <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                <div className="flex items-center gap-2">
                  <User className="w-3 h-3" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-3 h-3" />
                  <span>{post.readTime}</span>
                </div>
              </div>
              
              {/* Read More Link */}
              <motion.div
                whileHover={{ x: 4 }}
                className="flex items-center gap-2 text-primary font-medium text-sm cursor-pointer"
                onClick={() => router.push(`/blog/${post.slug}`)}
              >
                <span>Read More</span>
                <ArrowRight className="w-4 h-4" />
              </motion.div>
            </motion.article>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/blog">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary inline-flex items-center gap-2"
            >
              View All Blog Posts
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;
