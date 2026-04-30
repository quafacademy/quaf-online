"use client";

import { motion } from "framer-motion";
import { BookMarked, Feather, Speech, Lightbulb, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Courses() {
  const courses = [
    {
      icon: BookMarked,
      title: "Qur’an Recitation Training",
      desc: "Learn to recite the Qur’an with the correct rhythm, pace, and foundational rules of reading.",
    },
    {
      icon: Feather,
      title: "Tajweed & Pronunciation",
      desc: "Detailed study of Makharij and Sifat to ensure every letter is pronounced with its due rights.",
    },
    {
      icon: Speech,
      title: "Fluency Development",
      desc: "A progressive program designed to remove hesitation and build a smooth, confident reading style.",
    },
    {
      icon: Lightbulb,
      title: "Qur’anic Reflection",
      desc: "Tadabbur sessions focused on understanding the meanings and wisdom behind the verses.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants: import("framer-motion").Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
  };

  return (
    <section id="courses" className="py-16 sm:py-24 bg-white relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-quaf-soft-teal/40 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-quaf-dark mb-4 drop-shadow-sm"
            >
              Our Core Programs
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-base sm:text-lg text-quaf-dark/80 font-medium"
            >
              Structured learning paths designed to take you from basic reading to fluent, meaningful recitation.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link href="#all-courses" className="inline-flex items-center bg-quaf-primary/10 px-5 py-2.5 rounded-full text-quaf-primary font-bold hover:bg-quaf-primary hover:text-white shadow-sm transition-all group">
              View All Programs
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 perspective-1000"
        >
          {courses.map((course, index) => {
            const Icon = course.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ rotateX: 2, rotateY: -2, scale: 1.02 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="group relative bg-white rounded-3xl p-[1px] shadow-md hover:shadow-2xl transition-all duration-500 overflow-visible"
              >
                {/* Gradient Border Base */}
                <div className="absolute inset-0 bg-gradient-to-br from-quaf-primary/30 via-quaf-soft-teal to-quaf-secondary/40 rounded-3xl opacity-50 group-hover:opacity-100 group-hover:from-quaf-primary group-hover:to-quaf-secondary transition-all duration-500" />
                
                {/* Glowing Aura on Hover */}
                <div className="absolute inset-0 bg-quaf-secondary/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />

                <div className="relative h-full bg-white/95 backdrop-blur-xl rounded-[23px] p-6 sm:p-10 z-10 flex flex-col">
                  {/* Subtle inner pattern */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-quaf-primary/5 rounded-bl-full pointer-events-none transition-transform duration-500 group-hover:scale-110" />

                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-quaf-soft-teal to-white shadow-sm flex items-center justify-center text-quaf-primary mb-6 sm:mb-8 group-hover:scale-110 group-hover:shadow-md transition-all duration-500 border border-white">
                    <Icon className="w-7 h-7 sm:w-8 sm:h-8" />
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-bold text-quaf-dark mb-3 sm:mb-4 font-serif group-hover:text-quaf-primary transition-colors">{course.title}</h3>
                  <p className="text-quaf-dark/70 leading-relaxed mb-8 flex-grow text-sm sm:text-base font-medium">
                    {course.desc}
                  </p>
                  
                  <div className="mt-auto">
                    <Link 
                      href="#learn-more" 
                      className="inline-flex items-center text-quaf-primary font-bold group-hover:text-quaf-secondary transition-colors"
                    >
                      <span className="relative overflow-hidden">
                        Learn More
                        <span className="absolute bottom-0 left-0 w-full h-[2px] bg-quaf-secondary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                      </span>
                      <ArrowRight className="ml-2 w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
