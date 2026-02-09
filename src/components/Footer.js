'use client';

import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const logo = "/assets/logo.svg";

const deliveryAreas = [
  { name: "High Wycombe", image: "/assets/our services/High Wycombe 01.png" },
  { name: "Henley-on-Thames", image: "/assets/our services/Henley on Thames01.png" },
  { name: "Beaconsfield", image: "/assets/our services/Beaconsfield01.png" },
  { name: "Maidenhead", image: "/assets/our services/Maidenhead.png" },
  { name: "Marlow", image: "/assets/our services/Marlow01.png" }
];

const Footer = () => {
  return (
    <footer className="bg-foreground">
      {/* Main Footer */}
      <div className="container py-12 md:py-16 lg:py-20">
        <div className="grid lg:grid-cols-12 gap-10 md:gap-12 lg:gap-8">

          {/* Brand - Centered on mobile */}
          <div className="lg:col-span-4 text-center md:text-left">
            <div className="flex justify-center md:justify-start mb-6">
              <Image src={logo} alt="Speedy Laundry" className="h-10 brightness-0 invert w-auto" width={200} height={40} />
            </div>
            <p className="text-white/60 mb-8 leading-relaxed text-center md:text-left">
              Premium laundry & dry cleaning with free pickup and delivery. Making laundry day a breeze since 2014.
            </p>
            <div className="flex justify-center md:justify-start">
              <Link href="/#contact" className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-6 py-3 rounded-full hover:brightness-110 transition-all">
                Book Now
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-8">

              {/* Services - Centered on mobile */}
              <div className="text-center md:text-left">
                <h4 className="text-white font-bold mb-6 text-sm tracking-wider uppercase">Services</h4>
                <ul className="space-y-3">
                  {["Iron Only", "Wash + Iron", "Wash, Dry & Fold", "Dry Cleaning"].map((service) => (
                    <li key={service}>
                      <Link href="/services" className="text-white/60 hover:text-white transition-colors block">
                        {service}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick Links - Centered on mobile */}
              <div className="text-center md:text-left">
                <h4 className="text-white font-bold mb-6 text-sm tracking-wider uppercase">Company</h4>
                <ul className="space-y-3">
                  <li>
                    <Link href="/about" className="text-white/60 hover:text-white transition-colors block">About Us</Link>
                  </li>
                  <li>
                    <Link href="/#how-it-works" className="text-white/60 hover:text-white transition-colors block">How It Works</Link>
                  </li>
                  <li>
                    <Link href="/#reviews" className="text-white/60 hover:text-white transition-colors block">Reviews</Link>
                  </li>
                  <li>
                    <Link href="/#faq" className="text-white/60 hover:text-white transition-colors block">FAQ</Link>
                  </li>
                  <li>
                    <Link href="/#contact" className="text-white/60 hover:text-white transition-colors block">Contact</Link>
                  </li>
                </ul>
              </div>

              {/* Contact - Centered on mobile */}
              <div className="text-center md:text-left">
                <h4 className="text-white font-bold mb-6 text-sm tracking-wider uppercase">Contact</h4>
                <ul className="space-y-4">
                  <li className="flex flex-col md:flex-row md:items-start gap-2 md:gap-3">
                    <div className="flex justify-center md:justify-start">
                      <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                    </div>
                    <span className="text-white/60 text-center md:text-left">
                      Abbey House, Lincoln Road,<br />
                      High Wycombe, HP12 3RD
                    </span>
                  </li>
                  <li className="flex flex-col md:flex-row md:items-center gap-2 md:gap-3">
                    <div className="flex justify-center md:justify-start">
                      <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                    </div>
                    <a href="tel:01494445291" className="text-white/60 hover:text-white transition-colors text-center md:text-left">
                      01494 445291
                    </a>
                  </li>
                  <li className="flex flex-col md:flex-row md:items-center gap-2 md:gap-3">
                    <div className="flex justify-center md:justify-start">
                      <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                    </div>
                    <a href="mailto:info@speedylaundry.co.uk" className="text-white/60 hover:text-white transition-colors text-sm text-center md:text-left">
                      info@speedylaundry.co.uk
                    </a>
                  </li>
                  <li className="flex flex-col md:flex-row md:items-start gap-2 md:gap-3">
                    <div className="flex justify-center md:justify-start">
                      <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                    </div>
                    <span className="text-white/60 text-center md:text-left">
                      Mon-Fri: 6AM - 3PM<br />
                      Sat-Sun: Closed
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Service Areas - In one line */}
        <div className="mt-12 md:mt-16 pt-8 md:pt-12 border-t border-white/10">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-center md:justify-start gap-2 text-white font-bold text-sm tracking-widest uppercase mb-4">
              <MapPin className="w-4 h-4 text-primary" /> We deliver to
            </div>
            <div className="flex items-center justify-center md:justify-start gap-3 md:gap-4 overflow-x-auto scrollbar-hide pb-2">
              {deliveryAreas.map((area) => (
                <div key={area.name} className="group relative flex items-center gap-2 md:gap-3 bg-white/5 px-3 md:px-4 py-2 rounded-full hover:bg-white/10 transition-all cursor-default flex-shrink-0">
                  <div className="w-6 h-6 md:w-8 md:h-8 overflow-hidden shrink-0">
                    <img src={area.image} alt={area.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <span className="text-white/80 text-xs font-bold uppercase tracking-wider">{area.name}</span>
                </div>
              ))}
              <Link href="/#areas" className="flex items-center gap-2 bg-primary/10 text-primary px-4 md:px-5 py-2 rounded-full hover:bg-primary/20 transition-all font-bold text-xs uppercase tracking-wider border border-primary/20 flex-shrink-0">
                +60 More Areas
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <p className="text-white/40 text-sm order-2 md:order-1">
              © {new Date().getFullYear()} Speedy Laundry. All rights reserved.
            </p>
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 order-1 md:order-2">
              <div className="flex gap-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors" aria-label="Facebook">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors" aria-label="Instagram">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
              </div>
              <div className="h-4 w-px bg-white/20 hidden md:block" />
              <div className="flex gap-6 text-sm">
                <Link href="/privacy" className="text-white/40 hover:text-white transition-colors">Privacy</Link>
                <Link href="/terms" className="text-white/40 hover:text-white transition-colors">Terms</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;