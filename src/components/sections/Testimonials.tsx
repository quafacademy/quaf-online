"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

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
    <div className="flex gap-1 mb-4 relative z-10">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-[#1d9aaf] text-[#1d9aaf]" style={{ filter: "drop-shadow(0 0 4px rgba(29,154,175,0.6))" }} />
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
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative flex flex-col h-full rounded-3xl overflow-hidden transition-all duration-500 cursor-default"
      style={{
        background: "rgba(255, 255, 255, 0.03)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        border: "1px solid rgba(29, 154, 175, 0.15)",
        boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
      }}
    >
      {/* Background large quote icon */}
      <Quote className="absolute top-6 right-6 w-24 h-24 text-[#1d9aaf] opacity-5 -rotate-12 pointer-events-none transition-transform duration-700 group-hover:scale-110 group-hover:rotate-0" />

      {/* Hover glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1d9aaf]/5 via-transparent to-[#0f5f77]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ boxShadow: "inset 0 0 0 1px rgba(29,154,175,0.3), 0 12px 40px rgba(29,154,175,0.15)" }} />

      <div className="relative z-10 p-8 flex flex-col h-full">
        <StarRating count={t.stars} />

        {/* Quote text */}
        <p className="text-white/85 text-base sm:text-lg leading-relaxed flex-1 font-light mb-8 font-serif">
          &ldquo;{t.text}&rdquo;
        </p>

        {/* Author */}
        <div className="flex items-center gap-4 mt-auto pt-5 border-t border-white/10">
          {/* Avatar */}
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center text-white text-base font-bold flex-shrink-0 relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #0f5f77, #1d9aaf)",
              boxShadow: "0 0 16px rgba(29,154,175,0.4)"
            }}
          >
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay" />
            {t.initials}
          </div>
          <div>
            <div className="text-white font-bold text-sm tracking-wide">{t.name}</div>
            <div className="text-[#1d9aaf] text-xs font-medium uppercase tracking-wider mt-0.5">{t.role}</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(to bottom, #071e28, #0a2e3d, #071e28)" }}>
      {/* Background depth layers / Glowing Blobs */}
      <div className="absolute inset-0 overflow-hidden w-full pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#0f5f77]/30 blur-[120px]" style={{ animation: "float 12s ease-in-out infinite" }} />
        <div className="absolute top-1/2 -right-40 w-[600px] h-[600px] rounded-full bg-[#1d9aaf]/15 blur-[150px]" style={{ animation: "float 15s ease-in-out infinite reverse" }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 bg-white/5 border border-white/10 backdrop-blur-md px-5 py-2 rounded-full mb-6 shadow-[0_0_20px_rgba(29,154,175,0.15)]"
          >
            <Star className="w-4 h-4 fill-[#1d9aaf] text-[#1d9aaf]" />
            <span className="text-[#1d9aaf] font-bold text-xs tracking-[0.2em] uppercase">Student Stories</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mb-6"
            style={{ textShadow: "0 0 30px rgba(29,154,175,0.4)" }}
          >
            Lives Transformed by the Qur&apos;an
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "64px" }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="h-1 bg-gradient-to-r from-transparent via-[#1d9aaf] to-transparent mx-auto rounded-full"
            style={{ boxShadow: "0 0 12px rgba(29,154,175,0.6)" }}
          />

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-white/60 text-base sm:text-lg mt-6 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Thousands of learners around the world have deepened their connection with the Qur'an through our immersive methodology.
          </motion.p>
        </div>

        {/* ── Desktop/Tablet: 3-column grid ── */}
        <div className="hidden sm:grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard key={t.name} t={t} index={i} />
          ))}
        </div>

        {/* ── Mobile: horizontal swipe carousel ── */}
        <div className="sm:hidden -mx-4 px-4">
          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto pb-8 pt-4 no-scrollbar snap-x snap-mandatory"
            style={{ scrollPaddingLeft: "1rem", scrollPaddingRight: "1rem" }}
          >
            {TESTIMONIALS.map((t, i) => (
              <div key={t.name} className="snap-center flex-shrink-0" style={{ width: "calc(85vw)" }}>
                <TestimonialCard t={t} index={i} />
              </div>
            ))}
          </div>
          {/* Swipe hint dots */}
          <div className="flex justify-center mt-2 gap-2">
            {TESTIMONIALS.map((_, i) => (
              <div key={i} className="w-2 h-2 rounded-full bg-white/10" />
            ))}
          </div>
        </div>

        {/* Bottom trust bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-16 sm:mt-24 flex flex-wrap justify-center items-center gap-10 sm:gap-16 border-t border-white/5 pt-12"
        >
          {[
            { value: "5,000+", label: "Active Students" },
            { value: "4.9 ★", label: "Average Rating" },
            { value: "30+", label: "Countries Reached" },
          ].map((stat) => (
            <div key={stat.label} className="text-center group">
              <div className="text-3xl sm:text-4xl font-bold font-serif text-white mb-2 group-hover:text-[#1d9aaf] transition-colors drop-shadow-[0_0_12px_rgba(29,154,175,0.4)]">
                {stat.value}
              </div>
              <div className="text-white/40 text-xs sm:text-sm font-semibold uppercase tracking-[0.15em]">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
