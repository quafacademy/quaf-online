"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[100svh] flex items-center pt-20 overflow-hidden bg-quaf-dark"
    >
      {/* Immersive Animated Gradient Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-[#0f5f77] via-[#157991] to-[#0a3f50] opacity-90"
        />
        {/* Layered glowing orbs */}
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#1d9aaf] blur-[150px] opacity-40 mix-blend-screen animate-float-slow" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-[#1d9aaf] blur-[150px] opacity-30 mix-blend-screen animate-float" />
        
        {/* Subtle geometric pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] mix-blend-overlay" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div 
            style={{ opacity: opacityText }}
            className="flex flex-col space-y-8 text-center lg:text-left z-20"
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full mb-6 mx-auto lg:mx-0">
                <span className="w-2 h-2 rounded-full bg-quaf-secondary animate-pulse-glow" />
                <span className="text-sm font-medium text-white tracking-wide">Premium Learning Experience</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold font-serif leading-tight text-white drop-shadow-2xl">
                Master the Qur’an with{" "}
                <span className="text-quaf-secondary relative inline-block text-gradient">
                  Clarity & Fluency
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light"
            >
              A guided spiritual journey to perfect your recitation, elevate your pronunciation, and build an unbreakable connection with the Book of Allah.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6"
            >
              <Link
                href="#courses"
                className="group relative flex items-center justify-center bg-white text-quaf-primary px-8 py-4 rounded-full text-base font-bold overflow-hidden shadow-[0_0_40px_rgba(29,154,175,0.4)] hover:shadow-[0_0_60px_rgba(29,154,175,0.6)] transition-all w-full sm:w-auto hover:scale-105"
              >
                <div className="absolute inset-0 bg-quaf-light opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10 flex items-center">
                  Explore Courses
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link
                href="#join"
                className="group flex items-center justify-center border border-white/30 text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-white/10 backdrop-blur-md transition-all w-full sm:w-auto"
              >
                Join Community
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Content - Abstract Illustration with Parallax */}
          <motion.div
            style={{ y: yBg }}
            className="relative hidden lg:block h-[600px] z-10"
          >
            {/* Main Floating Element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute inset-0 flex items-center justify-center"
            >
              {/* Layered rings for depth */}
              <div className="absolute w-[450px] h-[450px] rounded-full border-[1px] border-white/10 animate-[spin_40s_linear_infinite]" />
              <div className="absolute w-[350px] h-[350px] rounded-full border-[1px] border-dashed border-quaf-secondary/30 animate-[spin_30s_linear_infinite_reverse]" />
              
              {/* Premium Glass Card */}
              <motion.div 
                animate={{ y: [-20, 20, -20] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="relative w-3/4 h-[400px] rounded-3xl bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl overflow-hidden flex flex-col items-center justify-center transform rotate-3"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />
                <div className="absolute -inset-1/2 bg-gradient-to-tr from-quaf-secondary/20 to-transparent blur-2xl pointer-events-none animate-pulse-glow" />
                
                <h2 className="font-cursive text-7xl text-white mb-6 drop-shadow-lg z-10">القرآن</h2>
                <div className="w-24 h-1 bg-quaf-secondary mx-auto rounded-full mb-6 shadow-[0_0_15px_rgba(29,154,175,0.8)] z-10" />
                <p className="font-serif text-xl italic text-white/90 z-10">Ocean of Knowledge</p>
                
                {/* Floating particles inside the glass card */}
                <div className="absolute top-10 left-10 w-2 h-2 rounded-full bg-white animate-pulse" />
                <div className="absolute bottom-20 right-16 w-3 h-3 rounded-full bg-quaf-secondary animate-pulse" style={{ animationDelay: '1s' }} />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Animated Flowing Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20 transform translate-y-1">
        <svg
          className="relative block w-[200%] h-[100px] sm:h-[150px] fill-quaf-light animate-wave"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M0,60 C150,100 350,0 600,60 C850,120 1050,20 1200,60 C1350,100 1550,0 1800,60 L1800,120 L0,120 Z" />
        </svg>
      </div>
    </section>
  );
}

