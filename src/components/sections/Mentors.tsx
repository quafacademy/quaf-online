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
    <section id="mentors" className="py-16 sm:py-24 bg-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-quaf-light/50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-quaf-dark mb-4 drop-shadow-sm"
          >
            Our Expert Mentors
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "80px" }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="h-1 bg-gradient-to-r from-quaf-primary to-quaf-secondary mx-auto rounded-full mb-6"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-base sm:text-lg text-quaf-dark/70 max-w-2xl mx-auto font-medium"
          >
            Learn from qualified instructors who combine traditional knowledge with modern teaching methodologies.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-16">
          {mentors.map((mentor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
              whileHover={{ y: -10 }}
              className="flex flex-col items-center text-center group cursor-default"
            >
              {/* Profile Image Wrapper */}
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 mb-8">
                {/* Glowing Aura Behind Avatar */}
                <div className="absolute inset-0 bg-quaf-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-110" />

                {/* Animated Gradient Ring */}
                <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-quaf-primary via-white to-quaf-secondary opacity-30 group-hover:opacity-100 group-hover:rotate-180 transition-all duration-700" />
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-quaf-secondary/50 group-hover:rotate-90 transition-transform duration-700" />
                
                <div className="absolute inset-2 rounded-full bg-gradient-to-br from-quaf-light to-white flex items-center justify-center overflow-hidden border border-white shadow-inner group-hover:scale-[0.98] transition-transform duration-300">
                  {/* Placeholder for actual mentor image */}
                  <UserCircle className="w-24 h-24 sm:w-28 sm:h-28 text-quaf-primary/20 group-hover:text-quaf-primary/40 transition-colors duration-500" />
                </div>
                {/* Decorative accent dot */}
                <div className="absolute bottom-2 sm:bottom-4 right-4 sm:right-6 w-4 h-4 rounded-full bg-quaf-secondary border-2 border-white shadow-sm shadow-quaf-secondary/50" />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold font-serif text-quaf-dark mb-2 group-hover:text-quaf-primary transition-colors">{mentor.name}</h3>
              <p className="text-quaf-secondary font-bold text-sm sm:text-base mb-4 tracking-wide">{mentor.role}</p>
              <p className="text-quaf-dark/60 text-sm sm:text-base leading-relaxed max-w-sm font-medium">
                {mentor.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
