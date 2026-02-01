'use client';

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
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


  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white shadow-lg" 
          : "bg-gradient-to-b from-black/40 to-transparent"
      }`}
    >
      <nav className="container">
        <div className="flex items-center justify-between h-20 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center h-full">
            <motion.div 
              className=" p-3 lg:p-4 rounded-b-3xl "
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Image 
                src={logo} 
                alt="Speedy Laundry" 
                className={`h-8 lg:h-12 w-auto object-contain transition-all duration-300 ${ scrolled ? "" : "brightness-0 invert" }`}
                width={200}
                height={48}
                priority
              />
            </motion.div>
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
                  className={`relative px-6 py-3 text-xl font-bold transition-all duration-300 ${
                    pathname === link.href
                      ? scrolled ? "text-primary" : "text-white"
                      : scrolled 
                        ? "text-header/80 hover:text-primary" 
                        : "text-white/80 hover:text-white"
                  }`}
                >
                  {link.name}
                  {pathname === link.href && (
                    <motion.span
                      layoutId="activeNav"
                      className={`absolute bottom-0 left-6 right-6 h-1 rounded-full ${
                        scrolled ? "bg-primary" : "bg-white"
                      }`}
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
                className={`font-bold px-8 py-4 rounded-full transition-all text-xl shadow-lg hover:shadow-xl ${
                  scrolled 
                    ? "bg-primary text-white hover:bg-primary/90" 
                    : "bg-white text-primary hover:bg-white/90"
                }`}
              >
                Book Now
              </Link>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`lg:hidden p-2 transition-colors ${
              scrolled ? "text-header" : "text-white"
            }`} 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
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
                      className={`block px-4 py-3 rounded-xl text-lg font-bold transition-all ${
                        pathname === link.href
                          ? scrolled 
                            ? "bg-primary/10 text-primary" 
                            : "bg-white/20 text-white"
                          : scrolled
                            ? "text-header/80 hover:bg-header/5 hover:text-header"
                            : "text-white/80 hover:bg-white/10 hover:text-white"
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
                  className="pt-4 px-4"
                >
                  <Link 
                    href="/contact"
                    className={`block w-full text-center py-3 rounded-full font-bold text-lg shadow-md ${
                      scrolled
                        ? "bg-primary text-white"
                        : "bg-white text-primary"
                    }`}
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
