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
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
  };

  return (
    <section id="courses" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-quaf-dark mb-4"
            >
              Our Core Programs
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-quaf-dark/70"
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
            <Link href="#all-courses" className="inline-flex items-center text-quaf-primary font-semibold hover:text-quaf-secondary transition-colors group">
              View All Programs
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {courses.map((course, index) => {
            const Icon = course.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative bg-quaf-light rounded-3xl p-8 sm:p-10 border border-transparent hover:border-quaf-primary/20 transition-all duration-300 overflow-hidden"
              >
                {/* Hover Glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-quaf-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-quaf-primary/10 transition-colors duration-500 pointer-events-none" />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-quaf-primary mb-8 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-quaf-dark mb-4 font-serif">{course.title}</h3>
                  <p className="text-quaf-dark/70 leading-relaxed mb-8">
                    {course.desc}
                  </p>
                  <Link 
                    href="#learn-more" 
                    className="inline-flex items-center px-6 py-2.5 rounded-full border border-quaf-primary/30 text-quaf-primary font-medium hover:bg-quaf-primary hover:text-white transition-all duration-300"
                  >
                    Learn More
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
