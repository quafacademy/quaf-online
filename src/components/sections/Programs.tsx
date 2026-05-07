"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Calendar, Clock, ChevronRight, ChevronLeft } from "lucide-react";

export default function Programs() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const programs = [
    {
      title: "Intensive Tajweed Bootcamp",
      date: "Oct 15, 2024",
      duration: "4 Weeks",
      desc: "A rigorous program covering the essential rules of Tajweed with daily practice sessions.",
      color: "bg-quaf-primary",
    },
    {
      title: "Qur’anic Arabic Basics",
      date: "Nov 01, 2024",
      duration: "8 Weeks",
      desc: "Learn the foundational vocabulary and grammar to start understanding the Qur’an directly.",
      color: "bg-quaf-secondary",
    },
    {
      title: "Hifz Revision Circle",
      date: "Nov 10, 2024",
      duration: "Ongoing",
      desc: "A supportive community for those looking to maintain and strengthen their memorization.",
      color: "bg-quaf-dark",
    },
    {
      title: "Kids Fluency Masterclass",
      date: "Dec 05, 2024",
      duration: "6 Weeks",
      desc: "Engaging and interactive sessions designed specifically for young learners to build confidence.",
      color: "bg-quaf-primary",
    },
  ];

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 bg-quaf-light relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-quaf-soft-teal/30 skew-x-12 translate-x-32" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-between items-end mb-12">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl font-serif font-bold text-quaf-dark mb-4"
            >
              Upcoming Programs
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-quaf-dark/70 max-w-2xl"
            >
              Join our time-bound cohorts designed to accelerate your learning with structured curriculums and peer support.
            </motion.p>
          </div>
          
          {/* Navigation Buttons */}
          <div className="hidden md:flex space-x-3">
            <button 
              onClick={() => scroll("left")}
              className="w-12 h-12 rounded-full border border-quaf-dark/10 flex items-center justify-center text-quaf-dark hover:bg-white hover:shadow-md transition-all"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={() => scroll("right")}
              className="w-12 h-12 rounded-full bg-quaf-primary text-white flex items-center justify-center hover:bg-quaf-secondary hover:shadow-md transition-all"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 pb-8 pt-4 -mx-4 px-4 sm:mx-0 sm:px-0 snap-x snap-mandatory no-scrollbar"
        >
          {programs.map((prog, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="w-[85vw] sm:w-[300px] md:w-[380px] snap-center shrink-0 bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 border border-quaf-dark/5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(15,95,119,0.08)] transition-all relative overflow-hidden group"
            >
              {/* Color accent top bar */}
              <div className={`absolute top-0 left-0 w-full h-1.5 md:h-2 ${prog.color}`} />
              
              <div className="mt-2 mb-4 md:mb-6">
                <span className="inline-block px-3 py-1 rounded-md bg-quaf-soft-teal text-quaf-primary text-[10px] md:text-xs font-bold uppercase tracking-wider mb-3 md:mb-4">
                  Enrollment Open
                </span>
                <h3 className="text-lg md:text-xl font-bold font-serif text-quaf-dark leading-snug">{prog.title}</h3>
              </div>

              <p className="text-quaf-dark/70 text-[13px] md:text-sm mb-6 md:mb-8 leading-relaxed min-h-[48px] md:min-h-[64px]">
                {prog.desc}
              </p>

              <div className="flex flex-col space-y-2 md:space-y-3 pt-5 md:pt-6 border-t border-quaf-dark/5">
                <div className="flex items-center text-quaf-dark/60 text-[13px] md:text-sm font-medium">
                  <Calendar className="w-3.5 h-3.5 md:w-4 md:h-4 mr-2 md:mr-3 text-quaf-primary" />
                  Starts: {prog.date}
                </div>
                <div className="flex items-center text-quaf-dark/60 text-[13px] md:text-sm font-medium">
                  <Clock className="w-3.5 h-3.5 md:w-4 md:h-4 mr-2 md:mr-3 text-quaf-primary" />
                  Duration: {prog.duration}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
