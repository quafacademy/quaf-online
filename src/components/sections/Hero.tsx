"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-quaf-soft-teal/50 via-white to-quaf-light">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        {/* Abstract waves to symbolize Ocean of Knowledge */}
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute w-full h-full text-quaf-primary opacity-5">
          <path d="M0,50 C20,60 40,30 60,50 C80,70 100,40 100,40 L100,100 L0,100 Z" fill="currentColor" />
          <path d="M0,60 C30,80 50,40 80,60 C100,70 100,60 100,60 L100,100 L0,100 Z" fill="currentColor" opacity="0.5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col space-y-8 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif leading-tight text-quaf-dark">
                Master the Qur’an with{" "}
                <span className="text-quaf-primary relative inline-block">
                  Clarity, Fluency
                  {/* Underline decorative element */}
                  <svg className="absolute w-full h-3 -bottom-1 left-0 text-quaf-secondary opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0,5 Q50,10 100,5" stroke="currentColor" strokeWidth="2" fill="none" />
                  </svg>
                </span>{" "}
                & Understanding
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-lg sm:text-xl text-quaf-dark/80 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              A guided journey to improve recitation, pronunciation, and connection with the Qur’an.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6"
            >
              <Link
                href="#courses"
                className="group flex items-center justify-center bg-quaf-primary text-white px-8 py-3.5 rounded-full text-base font-semibold hover:bg-quaf-secondary transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full sm:w-auto"
              >
                Explore Courses
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#join"
                className="group flex items-center justify-center border-2 border-quaf-primary text-quaf-primary px-8 py-3.5 rounded-full text-base font-semibold hover:bg-quaf-soft-teal transition-all w-full sm:w-auto"
              >
                Join Community
              </Link>
            </motion.div>
          </div>

          {/* Right Content - Abstract Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative hidden lg:block h-[500px]"
          >
            {/* Main Floating Element */}
            <motion.div
              animate={{ y: [-15, 15, -15] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="relative w-full max-w-md aspect-square rounded-full bg-gradient-to-tr from-quaf-primary/20 to-quaf-secondary/20 blur-3xl" />
              
              {/* Central Premium Graphic (Placeholder for actual image/illustration) */}
              <div className="absolute w-3/4 h-3/4 rounded-2xl bg-white/40 backdrop-blur-xl border border-white/60 shadow-2xl overflow-hidden flex items-center justify-center transform rotate-3">
                <div className="text-center p-8">
                  <h2 className="font-cursive text-5xl text-quaf-primary mb-4">القرآن</h2>
                  <div className="w-16 h-1 bg-quaf-secondary mx-auto rounded-full mb-4 opacity-50"></div>
                  <p className="font-serif text-xl italic text-quaf-dark/70">"Ocean of Knowledge"</p>
                </div>
                
                {/* Decorative corner accents */}
                <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-quaf-primary/30 rounded-tl-2xl m-4"></div>
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-quaf-primary/30 rounded-br-2xl m-4"></div>
              </div>
            </motion.div>

            {/* Small floating decorative orbits */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
              className="absolute inset-0 border border-dashed border-quaf-primary/20 rounded-full scale-[0.8]"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
              className="absolute inset-0 border border-quaf-secondary/10 rounded-full scale-[1.1]"
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-sm text-quaf-dark/50 font-medium tracking-widest uppercase mb-2">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown className="text-quaf-primary w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  );
}
