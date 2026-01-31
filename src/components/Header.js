'use client';

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const logo = "/assets/logo.svg";

const navLinks = [
  { name: "Services", href: "/services" },
  { name: "Business", href: "/business" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-primary shadow-lg" 
          : "bg-gradient-to-b from-black/40 to-transparent"
      }`}
    >
      <nav className="container">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <motion.img 
              src={logo} 
              alt="Speedy Laundry" 
              className="h-8 lg:h-10 brightness-0 invert" 
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            />
          </Link>

          {/* Desktop nav - Right aligned */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.05 }}
              >
                <Link
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                    pathname === link.href
                      ? "text-white"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {link.name}
                  {pathname === link.href && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute bottom-0 left-4 right-4 h-0.5 bg-white/50 rounded-full"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="ml-4"
            >
              <Link 
                href="/contact" 
                className="bg-white text-primary font-semibold px-5 py-2.5 rounded-full hover:bg-white/90 transition-all text-sm"
              >
                Book Now
              </Link>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="lg:hidden p-2 text-white" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        {/* Mobile nav */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 space-y-1">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className={`block px-4 py-3 rounded-xl font-medium transition-all ${
                        pathname === link.href
                          ? "bg-white/10 text-white"
                          : "text-white/70 hover:bg-white/5 hover:text-white"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="pt-4"
                >
                  <Link 
                    href="/contact"
                    className="block w-full text-center bg-white text-primary py-3 rounded-full font-semibold"
                    onClick={() => setIsOpen(false)}
                  >
                    Book Now
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Header;
