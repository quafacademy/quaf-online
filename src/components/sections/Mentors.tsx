"use client";

import { motion } from "framer-motion";
import { UserCircle } from "lucide-react";

export default function Mentors() {
  const mentors = [
    {
      name: "Ustadh Abdullah",
      role: "Lead Tajweed Instructor",
      bio: "Ijaza in Hafs 'an 'Asim with over 10 years of teaching experience focusing on Makharij perfection.",
    },
    {
      name: "Ustadha Fatima",
      role: "Hifz & Fluency Coach",
      bio: "Specializes in helping adult learners overcome hesitation and build a consistent daily recitation habit.",
    },
    {
      name: "Shaykh Tariq",
      role: "Qur’anic Reflection Guide",
      bio: "Scholar in Tafsir, bringing the meanings of the Qur’an to life through deep, interactive Tadabbur sessions.",
    },
  ];

  return (
    <section id="mentors" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-quaf-dark mb-4"
          >
            Our Expert Mentors
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "80px" }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="h-1 bg-quaf-secondary mx-auto rounded-full mb-6"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-quaf-dark/70 max-w-2xl mx-auto"
          >
            Learn from qualified instructors who combine traditional knowledge with modern teaching methodologies.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {mentors.map((mentor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex flex-col items-center text-center group"
            >
              {/* Profile Image Wrapper */}
              <div className="relative w-40 h-40 mb-6">
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-quaf-secondary/30 group-hover:rotate-90 transition-transform duration-700" />
                <div className="absolute inset-2 rounded-full bg-quaf-light flex items-center justify-center overflow-hidden border border-white shadow-inner">
                  {/* Placeholder for actual mentor image */}
                  <UserCircle className="w-20 h-20 text-quaf-primary/20" />
                </div>
                {/* Decorative accent dot */}
                <div className="absolute bottom-2 right-4 w-4 h-4 rounded-full bg-quaf-primary border-2 border-white" />
              </div>

              <h3 className="text-xl font-bold font-serif text-quaf-dark mb-1">{mentor.name}</h3>
              <p className="text-quaf-secondary font-medium text-sm mb-4">{mentor.role}</p>
              <p className="text-quaf-dark/60 text-sm leading-relaxed max-w-sm">
                {mentor.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
