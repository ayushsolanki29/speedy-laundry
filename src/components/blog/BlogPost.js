'use client';

import { motion } from "framer-motion";
import { ArrowLeft, Clock, User, Calendar, Share2, Heart, MessageCircle, Tag } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const blogPostsData = {
  "10-common-laundry-mistakes": {
    title: "10 Common Laundry Mistakes You're Probably Making",
    excerpt: "Discover the most frequent laundry errors that damage your clothes and how to avoid them for longer-lasting garments.",
    author: "Sarah Johnson",
    date: "January 15, 2024",
    readTime: "5 min read",
    category: "Laundry Tips",
    image: "/assets/blog/laundry-mistakes.jpg",
    content: [
      {
        type: "heading",
        text: "Introduction"
      },
      {
        type: "paragraph",
        text: "Doing laundry seems simple, but many of us make common mistakes that can damage our clothes, waste energy, and lead to less-than-perfect results. As professional laundry experts, we've seen it all. Let's dive into the top 10 laundry mistakes you might be making and how to fix them."
      },
      {
        type: "heading",
        text: "1. Overloading the Washing Machine"
      },
      {
        type: "paragraph",
        text: "Stuffing your washing machine to the brim might seem efficient, but it prevents clothes from moving freely. This means they don't get properly cleaned and can cause excessive wear on your machine."
      },
      {
        type: "list",
        items: [
          "Leave at least 6 inches of space at the top",
          "Clothes should move freely during the wash cycle",
          "Split large loads into two smaller ones"
        ]
      },
      {
        type: "heading",
        text: "2. Using Too Much Detergent"
      },
      {
        type: "paragraph",
        text: "More detergent doesn't mean cleaner clothes. In fact, excess detergent can leave residue on your fabrics and cause skin irritation."
      },
      {
        type: "heading",
        text: "3. Not Sorting Clothes Properly"
      },
      {
        type: "paragraph",
        text: "Mixing whites, darks, and colors can lead to dye transfer and discoloration. Always sort your laundry by color and fabric type."
      },
      {
        type: "heading",
        text: "4. Ignoring Care Labels"
      },
      {
        type: "paragraph",
        text: "Those little tags on your clothes are there for a reason! They provide crucial information about water temperature, washing cycles, and drying methods."
      },
      {
        type: "heading",
        text: "5. Using Hot Water for Everything"
      },
      {
        type: "paragraph",
        text: "Hot water can shrink fabrics and set stains. Use cold water for delicates and darks, warm water for everyday items, and hot water only for whites and heavily soiled items."
      },
      {
        type: "heading",
        text: "6. Leaving Wet Clothes in the Washer"
      },
      {
        type: "paragraph",
        text: "Letting wet clothes sit can lead to mildew and musty smells. Transfer them to the dryer as soon as the wash cycle completes."
      },
      {
        type: "heading",
        text: "7. Over-Drying Clothes"
      },
      {
        type: "paragraph",
        text: "Excessive heat can shrink fabrics and cause wear. Remove clothes while they're still slightly damp and air-dry the rest of the way."
      },
      {
        type: "heading",
        text: "8. Not Cleaning Your Washing Machine"
      },
      {
        type: "paragraph",
        text: "Your washing machine needs regular cleaning to prevent buildup of detergent residue and bacteria."
      },
      {
        type: "heading",
        text: "9. Washing Delicates with Regular Clothes"
      },
      {
        type: "paragraph",
        text: "Delicate items like lingerie, silk, and wool need special care. Use mesh bags and gentle cycles for these items."
      },
      {
        type: "heading",
        text: "10. Skipping the Final Inspection"
      },
      {
        type: "paragraph",
        text: "Always check for remaining stains before drying. Heat can set stains permanently, making them impossible to remove."
      },
      {
        type: "heading",
        text: "Conclusion"
      },
      {
        type: "paragraph",
        text: "Avoiding these common laundry mistakes will help your clothes last longer, look better, and save you money in the long run. Remember, when in doubt, professional laundry services like Speedy Laundry are always here to help!"
      }
    ],
    tags: ["Laundry Tips", "Clothing Care", "Washing Machine", "Fabric Care"],
    relatedPosts: [
      { title: "Ultimate Stain Removal Guide", slug: "ultimate-stain-removal-guide" },
      { title: "Fabric Care 101", slug: "fabric-care-101" }
    ]
  },
  "ultimate-stain-removal-guide": {
    title: "The Ultimate Guide to Removing Tough Stains",
    excerpt: "Professional techniques for removing wine, coffee, grass, and oil stains from all types of fabrics.",
    author: "Mike Chen",
    date: "January 12, 2024",
    readTime: "8 min read",
    category: "Stain Removal",
    image: "/assets/blog/stain-removal.jpg",
    content: [
      {
        type: "heading",
        text: "Introduction"
      },
      {
        type: "paragraph",
        text: "Stains happen to everyone, but knowing how to treat them properly can save your favorite clothes. This comprehensive guide covers the most common stubborn stains and professional techniques to remove them effectively."
      },
      {
        type: "heading",
        text: "The Golden Rules of Stain Removal"
      },
      {
        type: "list",
        items: [
          "Act quickly - the faster you treat a stain, the better",
          "Blot, don't rub - rubbing can spread the stain",
          "Test cleaning solutions on hidden areas first",
          "Work from the outside in to prevent spreading",
          "Use cold water for most stains (except protein-based)"
        ]
      },
      {
        type: "heading",
        text: "Wine Stains"
      },
      {
        type: "paragraph",
        text: "Red wine stains can be intimidating, but they're removable with the right technique."
      },
      {
        type: "list",
        items: [
          "Blot immediately with a clean cloth",
          "Sprinkle salt to absorb excess wine",
          "Apply white vinegar and let sit for 5 minutes",
          "Rinse with cold water",
          "Apply hydrogen peroxide for stubborn stains"
        ]
      },
      {
        type: "heading",
        text: "Coffee Stains"
      },
      {
        type: "paragraph",
        text: "Coffee stains are common but treatable if you act fast."
      },
      {
        type: "list",
        items: [
          "Rinse with cold water immediately",
          "Apply liquid detergent directly to the stain",
          "Let sit for 15 minutes",
          "Wash in warm water",
          "Check before drying"
        ]
      },
      {
        type: "heading",
        text: "Grass Stains"
      },
      {
        type: "paragraph",
        text: "Grass stains contain chlorophyll and can be tough to remove."
      },
      {
        type: "list",
        items: [
          "Apply white vinegar directly to the stain",
          "Let sit for 30 minutes",
          "Scrub gently with a toothbrush",
          "Apply liquid detergent",
          "Wash in warm water"
        ]
      },
      {
        type: "heading",
        text: "Oil and Grease Stains"
      },
      {
        type: "paragraph",
        text: "Oil-based stains require special treatment to break down the grease."
      },
      {
        type: "list",
        items: [
          "Blot excess oil with paper towels",
          "Apply dish soap directly to the stain",
          "Work the soap in gently",
          "Let sit for 15 minutes",
          "Rinse with warm water and wash as usual"
        ]
      },
      {
        type: "heading",
        text: "When to Call Professionals"
      },
      {
        type: "paragraph",
        text: "Some stains are best left to professionals, especially on delicate fabrics or valuable items. Speedy Laundry has the expertise and specialized equipment to handle even the toughest stains without damaging your clothes."
      }
    ],
    tags: ["Stain Removal", "Wine Stains", "Coffee Stains", "Grass Stains", "Oil Stains"],
    relatedPosts: [
      { title: "10 Common Laundry Mistakes", slug: "10-common-laundry-mistakes" },
      { title: "Fabric Care 101", slug: "fabric-care-101" }
    ]
  },
  "fabric-care-101": {
    title: "Fabric Care 101: Understanding Clothing Labels",
    excerpt: "Decode those mysterious laundry symbols and learn the right way to care for different fabric types.",
    author: "Emma Davis",
    date: "January 10, 2024",
    readTime: "6 min read",
    category: "Fabric Care",
    image: "/assets/blog/fabric-care.jpg",
    content: [
      {
        type: "heading",
        text: "Introduction"
      },
      {
        type: "paragraph",
        text: "Have you ever looked at the care label on your clothes and felt like you were reading a secret code? Those symbols are actually your guide to keeping your clothes looking their best. Let's decode them together!"
      },
      {
        type: "heading",
        text: "Understanding Washing Symbols"
      },
      {
        type: "paragraph",
        text: "The washing symbols tell you how to clean your garments safely."
      },
      {
        type: "list",
        items: [
          "Tub with water: Machine washable",
          "Tub with hand: Hand wash only",
          "Tub with X: Do not wash",
          "Numbers in tub: Maximum water temperature",
          "Lines under tub: Gentle cycle"
        ]
      },
      {
        type: "heading",
        text: "Bleaching Symbols"
      },
      {
        type: "paragraph",
        text: "These triangles indicate whether bleach can be used."
      },
      {
        type: "list",
        items: [
          "Empty triangle: Bleach allowed",
          "Triangle with lines: Non-chlorine bleach only",
          "Triangle with X: Do not bleach"
        ]
      },
      {
        type: "heading",
        text: "Drying Symbols"
      },
      {
        type: "paragraph",
        text: "The square symbols guide you on proper drying methods."
      },
      {
        type: "list",
        items: [
          "Square with circle: Tumble dry allowed",
          "Dots in circle: Heat settings",
          "Lines under square: Drying settings",
          "Square with X: Do not tumble dry"
        ]
      },
      {
        type: "heading",
        text: "Ironing Symbols"
      },
      {
        type: "paragraph",
        text: "Iron symbols show safe ironing temperatures."
      },
      {
        type: "list",
        items: [
          "Iron symbol: Ironing allowed",
          "Dots in iron: Temperature settings",
          "Iron with X: Do not iron"
        ]
      },
      {
        type: "heading",
        text: "Dry Cleaning Symbols"
      },
      {
        type: "paragraph",
        text: "Circle symbols indicate dry cleaning requirements."
      },
      {
        type: "list",
        items: [
          "Empty circle: Dry cleanable",
          "Letters in circle: Required solvents",
          "Circle with X: Do not dry clean"
        ]
      },
      {
        type: "heading",
        text: "Common Fabric Types and Their Care"
      },
      {
        type: "paragraph",
        text: "Different fabrics require different care approaches."
      },
      {
        type: "heading",
        text: "Cotton"
      },
      {
        type: "paragraph",
        text: "Durable and versatile, cotton can usually be machine washed in warm water and tumble dried on medium heat."
      },
      {
        type: "heading",
        text: "Wool"
      },
      {
        type: "paragraph",
        text: "Wool requires gentle care - hand wash in cold water and lay flat to dry to prevent shrinking."
      },
      {
        type: "heading",
        text: "Silk"
      },
      {
        type: "paragraph",
        text: "Delicate silk should be hand washed in cold water or dry cleaned to maintain its luster."
      },
      {
        type: "heading",
        text: "Polyester"
      },
      {
        type: "paragraph",
        text: "Synthetic fabrics like polyester are easy to care for - machine wash in warm water and tumble dry on low heat."
      },
      {
        type: "heading",
        text: "Conclusion"
      },
      {
        type: "paragraph",
        text: "Understanding these symbols and fabric care requirements will help you extend the life of your clothes and keep them looking their best. When in doubt, professional cleaning services like Speedy Laundry can ensure your garments receive the proper care they deserve."
      }
    ],
    tags: ["Fabric Care", "Laundry Symbols", "Clothing Labels", "Fabric Types"],
    relatedPosts: [
      { title: "10 Common Laundry Mistakes", slug: "10-common-laundry-mistakes" },
      { title: "Ultimate Stain Removal Guide", slug: "ultimate-stain-removal-guide" }
    ]
  },
  "eco-friendly-laundry": {
    title: "Eco-Friendly Laundry: Save Money and the Planet",
    excerpt: "Simple switches to make your laundry routine more sustainable without compromising on cleanliness.",
    author: "Green Team",
    date: "January 8, 2024",
    readTime: "7 min read",
    category: "Sustainability",
    image: "/assets/blog/eco-laundry.jpg",
    content: [
      {
        type: "heading",
        text: "Introduction"
      },
      {
        type: "paragraph",
        text: "Making your laundry routine eco-friendly is easier than you think! Not only does it help the environment, but it can also save you money. Here are our top tips for sustainable laundry practices."
      },
      {
        type: "heading",
        text: "Wash in Cold Water"
      },
      {
        type: "paragraph",
        text: "About 90% of the energy used by washing machines goes to heating water. Switching to cold water can significantly reduce your energy consumption and carbon footprint."
      },
      {
        type: "heading",
        text: "Use Eco-Friendly Detergents"
      },
      {
        type: "paragraph",
        text: "Choose biodegradable, phosphate-free detergents that are gentle on the environment. Look for certifications like EPA Safer Choice or EcoLogo."
      },
      {
        type: "heading",
        text: "Wash Full Loads"
      },
      {
        type: "paragraph",
        text: "Wait until you have a full load before running the washing machine. This maximizes efficiency and reduces water and energy waste."
      },
      {
        type: "heading",
        text: "Line Dry When Possible"
      },
      {
        type: "paragraph",
        text: "Air-drying your clothes eliminates the energy consumption of tumble drying. It also helps clothes last longer by reducing wear and tear."
      },
      {
        type: "heading",
        text: "Use High-Efficiency Machines"
      },
      {
        type: "paragraph",
        text: "If you're in the market for a new washer, choose an ENERGY STAR certified model that uses significantly less water and energy."
      }
    ],
    tags: ["Sustainability", "Eco-Friendly", "Green Living", "Energy Saving"],
    relatedPosts: [
      { title: "10 Common Laundry Mistakes", slug: "10-common-laundry-mistakes" },
      { title: "Fabric Care 101", slug: "fabric-care-101" }
    ]
  },
  "winter-wardrobe-care": {
    title: "Winter Wardrobe Care: Sweater Storage & Maintenance",
    excerpt: "Keep your winter knits looking new season after season with these expert care tips.",
    author: "Lisa Park",
    date: "January 5, 2024",
    readTime: "5 min read",
    category: "Seasonal Care",
    image: "/assets/blog/winter-care.jpg",
    content: [
      {
        type: "heading",
        text: "Introduction"
      },
      {
        type: "paragraph",
        text: "Winter sweaters and knits require special care to maintain their shape and quality. With proper storage and maintenance, your favorite winter pieces can last for years."
      },
      {
        type: "heading",
        text: "Cleaning Before Storage"
      },
      {
        type: "paragraph",
        text: "Always clean sweaters before storing them for the season. Moths and pests are attracted to stains and body oils, not the fabric itself."
      },
      {
        type: "heading",
        text: "Proper Folding Techniques"
      },
      {
        type: "paragraph",
        text: "Never hang heavy sweaters as this can cause stretching and misshaping. Fold them carefully and store them in breathable containers."
      },
      {
        type: "heading",
        text: "Use Cedar or Lavender"
      },
      {
        type: "paragraph",
        text: "Natural repellents like cedar blocks or lavender sachets can help keep moths away without harsh chemicals."
      }
    ],
    tags: ["Seasonal Care", "Winter", "Sweater Care", "Storage"],
    relatedPosts: [
      { title: "Fabric Care 101", slug: "fabric-care-101" },
      { title: "10 Common Laundry Mistakes", slug: "10-common-laundry-mistakes" }
    ]
  },
  "science-of-detergent": {
    title: "The Science of Detergent: What Really Works",
    excerpt: "Understanding different detergent types and how to choose the right one for your needs.",
    author: "Dr. James Wilson",
    date: "January 3, 2024",
    readTime: "9 min read",
    category: "Products",
    image: "/assets/blog/detergent-science.jpg",
    content: [
      {
        type: "heading",
        text: "Introduction"
      },
      {
        type: "paragraph",
        text: "Not all detergents are created equal. Understanding the science behind different formulations can help you choose the best product for your specific needs."
      },
      {
        type: "heading",
        text: "How Detergents Work"
      },
      {
        type: "paragraph",
        text: "Detergents contain surfactants that lower water surface tension, allowing water to penetrate fabric fibers and lift away dirt and stains."
      },
      {
        type: "heading",
        text: "Types of Detergents"
      },
      {
        type: "paragraph",
        text: "From powders to liquids to pods, each formulation has its advantages. Powders are economical, liquids dissolve well in cold water, and pods offer convenience."
      },
      {
        type: "heading",
        text: "Enzymes and Stain Fighters"
      },
      {
        type: "paragraph",
        text: "Modern detergents contain enzymes that break down specific types of stains - proteases for protein stains, amylases for starches, and lipases for oils."
      }
    ],
    tags: ["Products", "Detergent", "Science", "Cleaning Chemistry"],
    relatedPosts: [
      { title: "Ultimate Stain Removal Guide", slug: "ultimate-stain-removal-guide" },
      { title: "10 Common Laundry Mistakes", slug: "10-common-laundry-mistakes" }
    ]
  }
};

const BlogPost = ({ slug }) => {
  console.log('BlogPost component received slug:', slug);
  console.log('Available slugs:', Object.keys(blogPostsData));
  
  const post = blogPostsData[slug];

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Blog Post Not Found</h1>
          <p className="text-muted-foreground mb-4">The blog post you're looking for doesn't exist.</p>
          <p className="text-muted-foreground mb-8">Slug: {slug}</p>
          <Link href="/blog" className="btn-primary">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <article className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-header to-header/90 text-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Link href="/blog" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
            
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium">
                {post.category}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              {post.title}
            </h1>
            
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
              {post.excerpt}
            </p>
            
            <div className="flex items-center justify-center gap-8 text-white/70">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="prose prose-lg max-w-none"
            >
              {post.content.map((section, index) => {
                switch (section.type) {
                  case 'heading':
                    return (
                      <h2 key={index} className="text-3xl font-bold text-foreground mt-12 mb-6">
                        {section.text}
                      </h2>
                    );
                  case 'paragraph':
                    return (
                      <p key={index} className="text-lg text-muted-foreground leading-relaxed mb-6">
                        {section.text}
                      </p>
                    );
                  case 'list':
                    return (
                      <ul key={index} className="space-y-3 mb-6">
                        {section.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0" />
                            <span className="text-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    );
                  default:
                    return null;
                }
              })}
            </motion.div>

            {/* Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 pt-8 border-t border-border"
            >
              <div className="flex items-center gap-2 mb-6">
                <Tag className="w-4 h-4 text-primary" />
                <span className="font-semibold text-foreground">Tags:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Social Share */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 pt-8 border-t border-border"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                    <Heart className="w-4 h-4" />
                    <span>Like</span>
                  </button>
                  <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                    <MessageCircle className="w-4 h-4" />
                    <span>Comment</span>
                  </button>
                </div>
                <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <Share2 className="w-4 h-4" />
                  <span>Share</span>
                </button>
              </div>
            </motion.div>

            {/* Related Posts */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-16 pt-8 border-t border-border"
            >
              <h3 className="text-2xl font-bold text-foreground mb-8">Related Posts</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {post.relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.slug}
                    href={`/blog/${relatedPost.slug}`}
                    className="card-premium p-6 hover:shadow-xl transition-all duration-300 group"
                  >
                    <h4 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {relatedPost.title}
                    </h4>
                    <div className="flex items-center gap-2 text-primary">
                      <span className="text-sm">Read More</span>
                      <ArrowLeft className="w-4 h-4 rotate-180" />
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </article>
  );
};

export default BlogPost;
