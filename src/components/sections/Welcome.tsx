"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Heart, Mic2, BookOpen } from "lucide-react";
import { useRef } from "react";

export default function Welcome() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const yElements = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  const pillars = [
    { icon: Heart, title: "القلب (Heart)", desc: "Building a spiritual connection." },
    { icon: Mic2, title: "الصوت (Voice)", desc: "Perfecting pronunciation and Tajweed." },
    { icon: BookOpen, title: "الفهم (Understanding)", desc: "Deepening comprehension of the meaning." },
  ];

  return (
    <section ref={containerRef} id="about" className="py-16 sm:py-24 bg-quaf-light relative overflow-hidden">
      {/* Decorative Parallax Background Layer */}
      <motion.div style={{ y: yBg }} className="absolute inset-0 z-0 opacity-40 pointer-events-none flex items-center justify-center">
        <div className="w-[800px] h-[800px] bg-gradient-to-tr from-quaf-soft-teal to-transparent rounded-full blur-[100px] -translate-x-1/3 -translate-y-1/4" />
        <div className="w-[600px] h-[600px] bg-gradient-to-bl from-[#1d9aaf]/10 to-transparent rounded-full blur-[80px] translate-x-1/3 translate-y-1/4" />
      </motion.div>

      {/* Decorative Arabic Calligraphy-inspired Divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl opacity-10 flex justify-center pointer-events-none">
        <svg viewBox="0 0 400 50" className="w-full text-quaf-primary h-12" preserveAspectRatio="xMidYMid meet">
          <path d="M50,25 Q100,5 150,25 T250,25 T350,25" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <circle cx="200" cy="25" r="4" fill="currentColor" />
          <circle cx="100" cy="15" r="2" fill="currentColor" />
          <circle cx="300" cy="35" r="2" fill="currentColor" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center">
          {/* Left: Text Content */}
          <motion.div
            style={{ y: yElements }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6 bg-white/40 p-6 sm:p-10 rounded-3xl backdrop-blur-xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-quaf-primary/10 to-quaf-secondary/10 text-quaf-primary font-bold text-sm mb-2 shadow-sm border border-quaf-primary/5">
              Welcome to QUAF
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-quaf-dark leading-tight drop-shadow-sm">
              A Journey Beyond <br className="hidden lg:block" /> Mere Reading
            </h2>
            <p className="text-base sm:text-lg text-quaf-dark/80 leading-relaxed font-medium">
              At Quran Understanding Accent Foundation (QUAF), we believe that engaging with the Qur’an is more than just reading words on a page. It is a transformative experience that requires dedication, right guidance, and pure intention.
            </p>
            <div className="p-6 bg-gradient-to-r from-white to-quaf-soft-teal/50 border-l-4 border-quaf-primary rounded-r-2xl text-quaf-dark/90 text-base sm:text-lg shadow-sm font-serif italic">
              "Improving Qur’an fluency is a journey of 
              <span className="font-bold text-quaf-primary mx-1">القلب (heart)</span>, 
              <span className="font-bold text-quaf-primary mx-1">الصوت (voice)</span>, and 
              <span className="font-bold text-quaf-primary mx-1">الفهم (understanding)</span>."
            </div>
          </motion.div>

          {/* Right: Pillars/Parallax Cards */}
          <div className="relative mt-8 lg:mt-0">
            <div className="relative space-y-4 sm:space-y-6">
              {pillars.map((pillar, index) => {
                const Icon = pillar.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="group flex items-center space-x-6 p-4 sm:p-6 bg-white/80 backdrop-blur-md rounded-2xl border border-white shadow-lg hover:shadow-[0_10px_30px_rgba(29,154,175,0.15)] transition-all cursor-default"
                  >
                    <div className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-quaf-primary/10 to-quaf-secondary/20 flex items-center justify-center text-quaf-primary group-hover:from-quaf-primary group-hover:to-quaf-secondary group-hover:text-white transition-all duration-300 shadow-inner">
                      <Icon className="w-7 h-7 sm:w-8 sm:h-8" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-quaf-dark mb-1 font-serif group-hover:text-quaf-primary transition-colors">{pillar.title}</h3>
                      <p className="text-sm sm:text-base text-quaf-dark/70 font-medium">{pillar.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
