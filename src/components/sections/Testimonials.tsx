"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Fatima Al-Rashidi",
    role: "Qur'an Student",
    location: "United Kingdom",
    text: "QUAF completely transformed how I approach the Qur'an. Within weeks, my recitation improved in ways I never imagined possible after years of trying on my own.",
    stars: 5,
    initials: "FA",
  },
  {
    name: "Ahmed Tariq",
    role: "Adult Learner",
    location: "Canada",
    text: "I finally understand what I recite in my prayers. The Tadabbur sessions opened my heart to meanings I had been missing for decades. Truly life-changing.",
    stars: 5,
    initials: "AT",
  },
  {
    name: "Mariam Hassan",
    role: "Hifz Aspirant",
    location: "UAE",
    text: "My fluency improved within weeks of starting the program. The instructors are patient, knowledgeable, and genuinely invested in your progress.",
    stars: 5,
    initials: "MH",
  },
  {
    name: "Yusuf Ibrahim",
    role: "Working Professional",
    location: "Malaysia",
    text: "As someone with a busy schedule, QUAF's structure made it easy to stay consistent. The Tajweed sessions are incredibly detailed yet easy to follow.",
    stars: 5,
    initials: "YI",
  },
  {
    name: "Aisha Noor",
    role: "University Student",
    location: "Australia",
    text: "The Q Talk series gave me so much spiritual inspiration alongside the practical skills. I feel more connected to the Qur'an than ever before.",
    stars: 5,
    initials: "AN",
  },
  {
    name: "Omar Khalid",
    role: "Revert Muslim",
    location: "Germany",
    text: "Starting from zero was daunting, but QUAF made it feel natural and achievable. The foundational recitation course is an absolute gem.",
    stars: 5,
    initials: "OK",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 mb-3">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
      ))}
    </div>
  );
}

function TestimonialCard({ t, index }: { t: (typeof TESTIMONIALS)[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.65, delay: (index % 3) * 0.12, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6, scale: 1.015 }}
      className="group relative flex flex-col h-full rounded-2xl overflow-hidden transition-all duration-500 cursor-default"
      style={{
        background: "rgba(255,255,255,0.7)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        border: "1px solid rgba(255,255,255,0.9)",
        boxShadow: "0 4px 24px rgba(15,95,119,0.07)",
      }}
    >
      {/* Hover glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-quaf-primary/5 via-transparent to-quaf-secondary/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ boxShadow: "0 0 0 1px rgba(29,154,175,0.25), 0 12px 40px rgba(29,154,175,0.12)" }} />

      <div className="relative z-10 p-6 flex flex-col h-full">
        <StarRating count={t.stars} />

        {/* Quote */}
        <div className="text-quaf-primary/20 text-5xl font-serif leading-none mb-2 select-none">&ldquo;</div>
        <p className="text-quaf-dark/80 text-sm sm:text-base leading-relaxed flex-1 font-medium mb-6">
          {t.text}
        </p>

        {/* Author */}
        <div className="flex items-center gap-3 mt-auto pt-4 border-t border-quaf-primary/8">
          {/* Avatar */}
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
            style={{ background: "linear-gradient(135deg, #0f5f77, #1d9aaf)", boxShadow: "0 0 12px rgba(29,154,175,0.3)" }}
          >
            {t.initials}
          </div>
          <div>
            <div className="text-quaf-dark font-bold text-sm">{t.name}</div>
            <div className="text-quaf-secondary text-xs font-medium">{t.role} · {t.location}</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-16 sm:py-24 relative overflow-hidden" style={{ background: "linear-gradient(160deg, #f0f9fb 0%, #f8fafc 50%, #e8f4f6 100%)" }}>
      {/* Background depth layers */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-quaf-primary/8 blur-[100px]" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-quaf-secondary/10 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 bg-white border border-quaf-primary/15 px-4 py-1.5 rounded-full mb-5 shadow-sm"
          >
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span className="text-quaf-primary font-bold text-xs tracking-widest uppercase">Student Stories</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-quaf-dark mb-4"
          >
            Lives Transformed by the Qur&apos;an
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "64px" }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="h-1 bg-gradient-to-r from-quaf-primary to-quaf-secondary mx-auto rounded-full"
          />

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-quaf-dark/65 text-base sm:text-lg mt-5 max-w-2xl mx-auto font-light"
          >
            Thousands of learners around the world have deepened their connection with the Qur'an through QUAF.
          </motion.p>
        </div>

        {/* ── Desktop/Tablet: 3-column grid ── */}
        <div className="hidden sm:grid grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard key={t.name} t={t} index={i} />
          ))}
        </div>

        {/* ── Mobile: horizontal swipe carousel ── */}
        <div className="sm:hidden">
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto pb-4 no-scrollbar snap-x snap-mandatory"
            style={{ scrollPaddingLeft: "1rem" }}
          >
            {TESTIMONIALS.map((t, i) => (
              <div key={t.name} className="snap-start flex-shrink-0" style={{ width: "calc(85vw)" }}>
                <TestimonialCard t={t} index={i} />
              </div>
            ))}
          </div>
          {/* Swipe hint */}
          <div className="flex justify-center mt-4 gap-1.5">
            {TESTIMONIALS.map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-quaf-primary/25" />
            ))}
          </div>
        </div>

        {/* Bottom trust bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-12 sm:mt-16 flex flex-wrap justify-center items-center gap-8 sm:gap-12"
        >
          {[
            { value: "5,000+", label: "Active Students" },
            { value: "4.9 ★", label: "Average Rating" },
            { value: "30+", label: "Countries Reached" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold font-serif text-quaf-primary mb-1">{stat.value}</div>
              <div className="text-quaf-dark/55 text-xs sm:text-sm font-medium uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
