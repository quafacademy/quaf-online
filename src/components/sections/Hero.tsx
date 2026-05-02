"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scaleText = useTransform(scrollYProgress, [0, 0.5], [1, 0.96]);

  // Floating particles
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: `${(i * 17 + 5) % 95}%`,
    y: `${(i * 23 + 10) % 90}%`,
    size: i % 3 === 0 ? 3 : i % 2 === 0 ? 2 : 1.5,
    delay: i * 0.25,
    duration: 4 + (i % 5),
  }));

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100svh] flex items-center pt-20 overflow-hidden"
      style={{ background: "#071e28" }}
    >
      {/* ── Deep layered gradient background ── */}
      <div className="absolute inset-0 z-0 overflow-hidden w-full">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0c4a60] via-[#0f5f77] to-[#071e28]" />
        <div
          className="absolute -top-1/4 -left-1/4 w-[70%] h-[70%] rounded-full bg-[#1d9aaf]/20 blur-[180px] mix-blend-screen"
          style={{ animation: "float 10s ease-in-out infinite" }}
        />
        <div
          className="absolute -bottom-1/4 -right-1/4 w-[60%] h-[60%] rounded-full bg-[#0f5f77]/40 blur-[160px] mix-blend-screen"
          style={{ animation: "float 14s ease-in-out infinite reverse" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] h-[50%] rounded-full bg-[#1d9aaf]/10 blur-[120px]" />
      </div>

      {/* ── Animated Light Rays (نور effect) ── */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {[10, 28, 48, 65, 82].map((angle, i) => (
          <motion.div
            key={i}
            className="absolute top-0 left-1/2"
            style={{
              width: "1px",
              height: "85vh",
              background: "linear-gradient(to bottom, rgba(29,154,175,0.2), transparent)",
              rotate: `${angle - 50}deg`,
              transformOrigin: "50% 0%",
            }}
            animate={{ opacity: [0.2, 0.7, 0.2], scaleY: [0.85, 1.05, 0.85] }}
            transition={{ repeat: Infinity, duration: 5 + i * 0.8, delay: i * 1.1, ease: "easeInOut" }}
          />
        ))}
      </div>

      {/* ── Floating Particles ── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-white/50"
            style={{ left: p.x, top: p.y, width: p.size, height: p.size }}
            animate={{ y: [0, -28, 0], opacity: [0.15, 0.6, 0.15] }}
            transition={{ repeat: Infinity, duration: p.duration, delay: p.delay, ease: "easeInOut" }}
          />
        ))}
      </div>

      {/* ── Main content ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh] py-12">

          {/* Left Content */}
          <motion.div
            style={{ opacity: opacityText, scale: scaleText }}
            className="flex flex-col space-y-7 text-center lg:text-left z-20"
          >
            {/* Badge */}
            {/* <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="flex justify-center lg:justify-start"
            >
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full">
                <span
                  className="w-2 h-2 rounded-full bg-[#1d9aaf]"
                  style={{ animation: "pulse-glow 2.5s ease-in-out infinite" }}
                />
                <span className="text-xs font-semibold text-white/90 tracking-[0.15em] uppercase">
                  Premium Learning Experience
                </span>
              </div>
            </motion.div> */}

            {/* ── HEADLINE — TEXT VISIBILITY FIXED ── */}
            <motion.div
              initial={{ opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-[4.5rem] font-bold font-serif leading-[1.1] text-white">
                Master the Qur&apos;an with
                <br />
                {/*
                  FIXED: Pure white text with a layered glow shadow for maximum
                  contrast against the teal gradient background.
                  No gradient-text on dark background — that causes the blending issue.
                */}
                <span
                  className="font-extrabold tracking-tight text-white"
                  style={{
                    textShadow:
                      "0 0 30px rgba(29,154,175,0.9), 0 0 70px rgba(29,154,175,0.5), 0 2px 8px rgba(0,0,0,0.6)",
                  }}
                >
                  Clarity &amp; Fluency
                </span>
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg sm:text-xl text-white/70 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light"
            >
              A guided spiritual journey to perfect your recitation, elevate your
              pronunciation, and build an unbreakable connection with the Book of Allah.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <Link
                href="#courses"
                className="group relative flex items-center justify-center bg-white text-quaf-primary px-8 py-3.5 rounded-full text-base font-bold overflow-hidden w-full sm:w-auto transition-all duration-500 hover:scale-105"
                style={{ boxShadow: "0 0 28px rgba(255,255,255,0.2), 0 8px 32px rgba(0,0,0,0.35)" }}
              >
                <span className="absolute inset-0 bg-quaf-soft-teal opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative z-10 flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                  Explore Courses
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>

              <Link
                href="#join"
                className="flex items-center justify-center border border-white/25 text-white/90 px-8 py-3.5 rounded-full text-base font-semibold backdrop-blur-sm hover:bg-white/10 hover:border-white/40 transition-all duration-400 w-full sm:w-auto"
              >
                Join Community
              </Link>
            </motion.div>

            {/* Scroll cue */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8, duration: 1.2 }}
              className="flex items-center gap-3 justify-center lg:justify-start pt-2"
            >
              <div className="w-5 h-9 border border-white/25 rounded-full flex items-start justify-center p-1">
                <motion.div
                  className="w-1 h-2 bg-white/60 rounded-full"
                  animate={{ y: [0, 12, 0] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                />
              </div>
              <span className="text-[10px] text-white/35 tracking-[0.25em] uppercase">Scroll to explore</span>
            </motion.div>
          </motion.div>

          {/* ── Right: Floating Glass Illustration ── */}
          <motion.div
            style={{ y: yBg }}
            className="relative hidden lg:flex h-[580px] items-center justify-center z-10"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="relative w-full h-full"
            >
              {/* Orbit rings */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="absolute w-[480px] h-[480px] rounded-full border border-white/[0.07]"
                  style={{ animation: "spin 50s linear infinite" }}
                />
                <div
                  className="absolute w-[360px] h-[360px] rounded-full border border-dashed border-[#1d9aaf]/20"
                  style={{ animation: "spin 35s linear infinite reverse" }}
                />
                <div
                  className="absolute w-[240px] h-[240px] rounded-full border border-white/[0.05]"
                  style={{ animation: "spin 20s linear infinite" }}
                />
              </div>

              {/* Main floating card */}
              <motion.div
                animate={{ y: [-18, 18, -18] }}
                transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div
                  className="relative w-[340px] h-[420px] rounded-[2rem] overflow-hidden flex flex-col items-center justify-center"
                  style={{
                    background: "rgba(255,255,255,0.07)",
                    backdropFilter: "blur(24px)",
                    WebkitBackdropFilter: "blur(24px)",
                    border: "1px solid rgba(255,255,255,0.14)",
                    boxShadow: "0 0 60px rgba(29,154,175,0.22), inset 0 1px 0 rgba(255,255,255,0.14)",
                    transform: "rotate(3deg)",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-[#1d9aaf]/10 pointer-events-none" />
                  <div
                    className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-[#1d9aaf]/15 rounded-full blur-[60px]"
                    style={{ animation: "pulse-glow 4s ease-in-out infinite" }}
                  />

                  <div className="relative z-10 flex flex-col items-center p-10">
                    <div
                      className="font-cursive text-[4.5rem] leading-none text-white mb-5"
                      style={{ textShadow: "0 0 30px rgba(29,154,175,0.7)" }}
                    >
                      القرآن
                    </div>
                    <div
                      className="w-20 h-px bg-gradient-to-r from-transparent via-[#1d9aaf] to-transparent mb-5"
                      style={{ boxShadow: "0 0 12px rgba(29,154,175,1)" }}
                    />
                    <p className="font-serif text-lg italic text-white/80 text-center">Ocean of Knowledge</p>
                  </div>

                  {/* Corner accents */}
                  <div className="absolute top-5 left-5 w-10 h-10 border-t border-l border-white/20 rounded-tl-xl" />
                  <div className="absolute bottom-5 right-5 w-10 h-10 border-b border-r border-[#1d9aaf]/40 rounded-br-xl" />

                  {/* Tiny particles */}
                  <div className="absolute top-8 right-10 w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse" />
                  <div className="absolute bottom-16 left-8 w-2 h-2 rounded-full bg-[#1d9aaf]/80 animate-pulse" style={{ animationDelay: "1.2s" }} />
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ── Wave Divider ── */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden z-20" style={{ height: "110px" }}>
        <svg
          className="absolute bottom-0 w-[200%] h-full fill-quaf-light"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          style={{ animation: "wave 12s linear infinite" }}
        >
          <path d="M0,50 C180,100 360,0 540,50 C720,100 900,0 1080,50 C1260,100 1440,0 1620,50 C1800,100 1980,0 2160,50 L2160,100 L0,100 Z" />
        </svg>
      </div>
    </section>
  );
}
