"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Courses", href: "#courses" },
    { name: "Q Talk", href: "#qtalk" },
    { name: "Mentors", href: "#mentors" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${isScrolled
        ? "bg-white/80 backdrop-blur-md shadow-sm py-3"
        : "bg-transparent py-3"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="#" className="flex-shrink-0 flex items-center relative z-50">
            <div className="relative">
              <motion.div
                initial={false}
                animate={{ opacity: isScrolled ? 0 : 1, scale: isScrolled ? 0.8 : 1 }}
                className="origin-left"
                transition={{ duration: 0.3 }}
              >
                {!isScrolled && (
                  <Image
                    src="/fullLogo2.png"
                    alt="QUAF"
                    width={120}
                    height={45}
                    className="h-7 w-auto object-contain"
                  />
                )}
              </motion.div>
              <motion.div
                initial={false}
                animate={{ opacity: isScrolled ? 1 : 0, scale: isScrolled ? 1 : 0.8 }}
                className="origin-left"
                transition={{ duration: 0.3 }}
              >
                {isScrolled && (
                  <Image
                    src="/fullLogo.png"
                    alt="QUAF"
                    width={120}
                    height={45}
                    className="h-7 w-auto object-contain"
                  />
                )}
              </motion.div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-quaf-secondary ${isScrolled ? "text-quaf-dark" : "text-quaf-light"
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <Link
              href="#join"
              className="bg-quaf-primary text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-quaf-secondary transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Join Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-quaf-dark focus:outline-none relative z-50"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl py-4 flex flex-col md:hidden border-t border-gray-100"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-6 py-3 text-quaf-dark hover:bg-quaf-soft-teal hover:text-quaf-primary font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="px-6 mt-4">
              <Link
                href="#join"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-center w-full bg-quaf-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-quaf-secondary transition-colors"
              >
                Join Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
