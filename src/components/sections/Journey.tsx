"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { BookOpen, Mic, RefreshCw, Lightbulb } from "lucide-react";

export default function Journey() {
  const containerRef = useRef<HTMLElement>(null);
  
  // We track the scroll progress of this container to animate the central connecting line
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const steps = [
    {
      icon: BookOpen,
      title: "Learn to Recite",
      desc: "Begin with the foundational rules of reading the Arabic script accurately.",
      align: "left",
    },
    {
      icon: Mic,
      title: "Improve Tajweed",
      desc: "Master the exact articulation points (Makharij) for precise pronunciation.",
      align: "right",
    },
    {
      icon: RefreshCw,
      title: "Gain Fluency",
      desc: "Remove hesitation through consistent practice and build a confident rhythm.",
      align: "left",
    },
    {
      icon: Lightbulb,
      title: "Understand the Qur’an",
      desc: "Reflect on the deep meanings, finding spiritual guidance in every verse.",
      align: "right",
    },
  ];

  return (
    <section ref={containerRef} className="py-24 bg-quaf-dark text-white relative overflow-hidden">
      {/* Background glow layers */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-quaf-primary/20 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-quaf-secondary/20 rounded-full blur-[120px] mix-blend-screen" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl sm:text-5xl font-serif font-bold text-white mb-6 drop-shadow-md"
          >
            The Path to Mastery
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="text-white/70 max-w-2xl mx-auto text-lg font-light"
          >
            A step-by-step spiritual progression designed to elevate your connection with the Book of Allah.
          </motion.p>
        </div>

        <div className="relative">
          {/* Central Animated Line (Desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-white/10 -translate-x-1/2 rounded-full overflow-hidden">
            <motion.div 
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-quaf-primary via-quaf-secondary to-white shadow-[0_0_15px_rgba(29,154,175,0.8)]"
            />
          </div>

          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isLeft = step.align === "left";

              return (
                <div key={index} className={`relative flex flex-col md:flex-row items-center ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  
                  {/* Content Box */}
                  <motion.div 
                    initial={{ opacity: 0, x: isLeft ? -50 : 50, y: 30 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                    className={`w-full md:w-[45%] ${isLeft ? "md:pr-16" : "md:pl-16"} mb-8 md:mb-0`}
                  >
                    <div className={`p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl hover:bg-white/10 transition-colors duration-500 relative group overflow-hidden`}>
                      <div className="absolute inset-0 bg-gradient-to-br from-quaf-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                      
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-quaf-primary to-quaf-secondary flex items-center justify-center text-white shadow-lg">
                          <Icon className="w-6 h-6" />
                        </div>
                        <h3 className="text-2xl font-bold font-serif text-white">{step.title}</h3>
                      </div>
                      <p className="text-white/70 leading-relaxed text-sm sm:text-base font-light">
                        {step.desc}
                      </p>
                    </div>
                  </motion.div>

                  {/* Center Node (Desktop) */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 items-center justify-center">
                    <motion.div 
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="w-8 h-8 rounded-full bg-quaf-dark border-4 border-quaf-secondary z-10 shadow-[0_0_20px_rgba(29,154,175,0.6)] flex items-center justify-center"
                    >
                      <div className="w-2 h-2 rounded-full bg-white" />
                    </motion.div>
                  </div>

                  {/* Empty Space for layout */}
                  <div className="hidden md:block w-[45%]" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
