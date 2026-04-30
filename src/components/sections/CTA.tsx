"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export default function CTA() {
  return (
    <section id="join" className="py-24 relative overflow-hidden" style={{ background: "#071e28" }}>
      {/* ── Rich gradient layers ── */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0c4a60] via-[#071e28] to-[#071e28]" />
        {/* Glowing blobs */}
        <div
          className="absolute -top-1/3 left-1/4 w-[50%] h-[50%] rounded-full bg-quaf-primary/30 blur-[150px]"
          style={{ animation: "float 9s ease-in-out infinite" }}
        />
        <div
          className="absolute -bottom-1/3 right-1/4 w-[45%] h-[45%] rounded-full bg-quaf-secondary/20 blur-[130px]"
          style={{ animation: "float 12s ease-in-out infinite reverse" }}
        />
      </div>

      {/* ── Animated light streaks ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {[20, 45, 70].map((angle, i) => (
          <motion.div
            key={i}
            className="absolute top-0 left-1/2"
            style={{
              width: "1px",
              height: "100%",
              background: "linear-gradient(to bottom, rgba(29,154,175,0.15), transparent)",
              rotate: `${angle - 45}deg`,
              transformOrigin: "50% 0%",
            }}
            animate={{ opacity: [0.2, 0.6, 0.2] }}
            transition={{ repeat: Infinity, duration: 4 + i * 1.5, delay: i * 1.2, ease: "easeInOut" }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          {/* Glass card */}
          <div
            className="rounded-3xl p-10 sm:p-16"
            style={{
              background: "rgba(255,255,255,0.04)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.1)",
              boxShadow: "0 0 80px rgba(29,154,175,0.15), inset 0 1px 0 rgba(255,255,255,0.08)",
            }}
          >
            {/* Icon badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 bg-quaf-secondary/20 border border-quaf-secondary/30 px-4 py-1.5 rounded-full mb-8"
            >
              <Sparkles className="w-4 h-4 text-quaf-secondary" />
              <span className="text-quaf-secondary text-sm font-semibold tracking-wide">Join Thousands of Learners</span>
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-6"
              style={{ textShadow: "0 0 40px rgba(29,154,175,0.3), 0 2px 8px rgba(0,0,0,0.4)" }}
            >
              Start Your Qur&apos;an
              <br />
              Journey Today
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.45, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed font-light"
            >
              Join a global community of learners committed to mastering the recitation
              and understanding of the Qur'an with excellence.
            </motion.p>

            {/* ── Animated glowing CTA button ── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block relative"
            >
              {/* Outer pulsing ring */}
              <motion.div
                className="absolute -inset-3 rounded-full opacity-40"
                style={{
                  background: "radial-gradient(ellipse, rgba(29,154,175,0.4), transparent 70%)",
                }}
                animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.15, 0.4] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              />

              {/* Second pulsing ring (offset timing) */}
              <motion.div
                className="absolute -inset-1 rounded-full opacity-30"
                style={{
                  background: "radial-gradient(ellipse, rgba(29,154,175,0.5), transparent 70%)",
                }}
                animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.08, 0.3] }}
                transition={{ repeat: Infinity, duration: 3, delay: 1.2, ease: "easeInOut" }}
              />

              <Link
                href="#register"
                className="group relative inline-flex items-center gap-3 bg-white text-quaf-primary font-bold text-lg px-10 py-4 rounded-full overflow-hidden transition-all duration-500 hover:scale-105"
                style={{
                  boxShadow: "0 0 40px rgba(29,154,175,0.4), 0 8px 32px rgba(0,0,0,0.3)",
                }}
              >
                {/* Hover fill */}
                <span className="absolute inset-0 bg-gradient-to-r from-quaf-soft-teal to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative z-10 flex items-center gap-3">
                  Join QUAF
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* ── Bottom wave to Contact ── */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden z-20" style={{ height: 80 }}>
        <svg
          className="absolute bottom-0 w-full fill-white"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
        >
          <path d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,20 1440,40 L1440,80 L0,80 Z" />
        </svg>
      </div>
    </section>
  );
}
