"use client";

import { motion } from "framer-motion";
import { Heart, Mic2, BookOpen } from "lucide-react";

export default function Welcome() {
  const pillars = [
    { icon: Heart, title: "القلب (Heart)", desc: "Building a spiritual connection." },
    { icon: Mic2, title: "الصوت (Voice)", desc: "Perfecting pronunciation and Tajweed." },
    { icon: BookOpen, title: "الفهم (Understanding)", desc: "Deepening comprehension of the meaning." },
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Arabic Calligraphy-inspired Divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl opacity-10 flex justify-center mt-8 pointer-events-none">
        <svg viewBox="0 0 400 50" className="w-full text-quaf-primary h-12" preserveAspectRatio="xMidYMid meet">
          <path d="M50,25 Q100,5 150,25 T250,25 T350,25" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <circle cx="200" cy="25" r="4" fill="currentColor" />
          <circle cx="100" cy="15" r="2" fill="currentColor" />
          <circle cx="300" cy="35" r="2" fill="currentColor" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-quaf-soft-teal text-quaf-primary font-semibold text-sm mb-2">
              Welcome to QUAF
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-quaf-dark leading-tight">
              A Journey Beyond <br className="hidden lg:block" /> Mere Reading
            </h2>
            <p className="text-lg text-quaf-dark/70 leading-relaxed">
              At Quran Understanding Accent Foundation (QUAF), we believe that engaging with the Qur’an is more than just reading words on a page. It is a transformative experience that requires dedication, right guidance, and pure intention.
            </p>
            <div className="p-6 bg-quaf-light border-l-4 border-quaf-primary rounded-r-2xl italic text-quaf-dark/80 text-lg shadow-sm">
              "Improving Qur’an fluency is a journey of 
              <span className="font-bold text-quaf-primary mx-1">القلب (heart)</span>, 
              <span className="font-bold text-quaf-primary mx-1">الصوت (voice)</span>, and 
              <span className="font-bold text-quaf-primary mx-1">الفهم (understanding)</span>."
            </div>
          </motion.div>

          {/* Right: Pillars/Parallax Cards */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-quaf-soft-teal to-transparent rounded-full blur-3xl opacity-50 transform -translate-x-10 translate-y-10" />
            
            <div className="relative space-y-6">
              {pillars.map((pillar, index) => {
                const Icon = pillar.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="flex items-center space-x-6 p-6 bg-white/80 backdrop-blur-md rounded-2xl border border-quaf-soft-teal shadow-md hover:shadow-lg transition-shadow"
                  >
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-quaf-primary/10 flex items-center justify-center text-quaf-primary">
                      <Icon className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-quaf-dark mb-1 font-serif">{pillar.title}</h3>
                      <p className="text-quaf-dark/60">{pillar.desc}</p>
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
