"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion";

// ─────────────────────────────────────────────────────────────────
//  Qur'an Scroll Story — Apple-style sticky scroll section
// ─────────────────────────────────────────────────────────────────

const PAGES = [
  {
    key: "closed",
    arabic: "بِسْمِ اللهِ",
    title: "Begin Your Journey",
    subtitle: "A single step of sincere intention opens the door to the Book of Allah.",
    accent: "rgba(29,154,175,0.6)",
    stage: 0,
  },
  {
    key: "open1",
    arabic: "اقْرَأْ",
    title: "Learn to Recite with Accuracy",
    subtitle: "Master the letters, sounds, and rules that bring the Qur'an to life on your tongue.",
    accent: "rgba(29,154,175,0.85)",
    stage: 1,
  },
  {
    key: "tajweed",
    arabic: "تَجْوِيد",
    title: "Improve Your Tajweed",
    subtitle: "Give every letter its due right — beautify your recitation the way the Prophet ﷺ taught.",
    accent: "rgba(29,154,175,1)",
    stage: 2,
  },
  {
    key: "fluency",
    arabic: "طَلَاقَة",
    title: "Develop Fluency",
    subtitle: "Flow through the verses with ease, confidence, and a rhythm that touches the heart.",
    accent: "rgba(29,154,175,0.9)",
    stage: 3,
  },
  {
    key: "understand",
    arabic: "تَدَبُّر",
    title: "Understand & Reflect",
    subtitle: "Let the meanings illuminate your heart. The Qur'an is guidance, light, and mercy.",
    accent: "rgba(255,255,255,0.9)",
    stage: 4,
  },
];

// ── Book illustration: renders CSS-based open/close ──
function QuranIllustration({ stage }: { stage: number }) {
  const openAngle = (stage / 4) * 65;
  const glowIntensity = 0.15 + stage * 0.07;

  return (
    <div className="relative w-full h-full flex items-center justify-center select-none">
      {/* Glow backdrop */}
      <div
        className="absolute w-72 h-72 rounded-full blur-[90px] transition-all duration-1000"
        style={{
          background: `radial-gradient(ellipse, rgba(29,154,175,${glowIntensity}), transparent 70%)`,
        }}
      />

      {/* Book wrapper */}
      <div className="relative" style={{ width: 260, height: 340, perspective: "600px" }}>
        {/* Right page */}
        <div
          className="absolute right-0 top-0 w-[130px] h-full rounded-r-xl"
          style={{
            background: "linear-gradient(135deg, #f8fafc 0%, #e6f3f5 60%, #c8e8ed 100%)",
            boxShadow: "4px 4px 20px rgba(0,0,0,0.35), inset -2px 0 8px rgba(15,95,119,0.08)",
          }}
        >
          {stage > 0 && (
            <div className="p-4 pt-6 flex flex-col gap-2.5">
              {[...Array(7)].map((_, idx) => (
                <div
                  key={idx}
                  className="h-[2px] rounded-full bg-quaf-primary/25"
                  style={{ width: `${68 - idx * 6}%`, marginLeft: "auto" }}
                />
              ))}
            </div>
          )}
          <div className="absolute left-0 top-0 w-3 h-full bg-gradient-to-r from-quaf-primary/15 to-transparent" />
        </div>

        {/* Left page — rotates open */}
        <div
          className="absolute left-0 top-0 w-[130px] h-full"
          style={{
            background: "linear-gradient(225deg, #f8fafc 0%, #e6f3f5 60%, #c8e8ed 100%)",
            boxShadow: "-4px 4px 20px rgba(0,0,0,0.35), inset 2px 0 8px rgba(15,95,119,0.08)",
            borderRadius: "12px 0 0 12px",
            transformStyle: "preserve-3d",
            transformOrigin: "right center",
            transform: `rotateY(${-openAngle}deg)`,
            transition: "transform 0.8s cubic-bezier(0.43, 0.13, 0.23, 0.96)",
          }}
        >
          {stage > 0 && (
            <div className="p-4 pt-6 flex flex-col gap-2.5">
              {[...Array(7)].map((_, idx) => (
                <div
                  key={idx}
                  className="h-[2px] rounded-full bg-quaf-primary/25"
                  style={{ width: `${62 - idx * 5}%` }}
                />
              ))}
            </div>
          )}
        </div>

        {/* Book spine */}
        <div
          className="absolute top-0 h-full z-10"
          style={{
            left: "calc(50% - 3px)",
            width: 6,
            borderRadius: 3,
            background: "linear-gradient(to bottom, #0f5f77, #1d9aaf, #0f5f77)",
            boxShadow: "0 0 12px rgba(29,154,175,0.6)",
          }}
        />

        {/* Final glow at stage 4 */}
        {stage >= 4 && (
          <div
            className="absolute inset-0 z-20 rounded pointer-events-none"
            style={{
              background: "radial-gradient(ellipse at center, rgba(29,154,175,0.25) 0%, transparent 70%)",
            }}
          />
        )}
      </div>
    </div>
  );
}

// ── Individual page layer (handles its own transform values via props) ──
function StoryPage({
  page,
  index,
  smoothProgress,
}: {
  page: (typeof PAGES)[0];
  index: number;
  smoothProgress: MotionValue<number>;
}) {
  const total = PAGES.length;
  const start = index / total;
  const end = (index + 1) / total;
  const midIn = start + 0.04;
  const midOut = end - 0.04;

  const opacity = useTransform(smoothProgress, [start, midIn, midOut, end], [0, 1, 1, 0]);
  const y = useTransform(smoothProgress, [start, midIn, midOut, end], [40, 0, 0, -40]);
  const scale = useTransform(smoothProgress, [start, midIn, midOut, end], [0.95, 1, 1, 0.97]);
  const glowOpacity = useTransform(smoothProgress, [start, midIn], [0, 1]);

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center z-10"
      style={{ opacity, pointerEvents: "none" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Book illustration */}
          <motion.div
            style={{ scale }}
            className="relative flex items-center justify-center h-[280px] sm:h-[380px] order-2 lg:order-1"
          >
            {/* Glow aura behind book */}
            <motion.div
              style={{ opacity: glowOpacity }}
              className="absolute w-[400px] h-[400px] rounded-full blur-[130px] pointer-events-none"
              // inline background avoids separate style prop conflict
              dangerouslySetInnerHTML={undefined}
            >
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: `radial-gradient(ellipse, ${page.accent}, transparent 70%)`,
                }}
              />
            </motion.div>
            <QuranIllustration stage={page.stage} />
          </motion.div>

          {/* Text content */}
          <motion.div
            style={{ y }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left gap-5 order-1 lg:order-2"
          >
            {/* Step dots */}
            <div className="flex items-center gap-2.5">
              {PAGES.map((_, j) => (
                <div
                  key={j}
                  className="rounded-full transition-all duration-700"
                  style={{
                    width: j === index ? 22 : 6,
                    height: 6,
                    background: j === index ? "#1d9aaf" : "rgba(255,255,255,0.2)",
                    boxShadow: j === index ? "0 0 10px rgba(29,154,175,0.8)" : "none",
                  }}
                />
              ))}
            </div>

            {/* Arabic */}
            <div
              className="font-cursive leading-none"
              style={{
                fontSize: "clamp(2.8rem, 7vw, 5rem)",
                color: "white",
                textShadow: `0 0 35px ${page.accent}, 0 0 70px rgba(29,154,175,0.3), 0 2px 8px rgba(0,0,0,0.5)`,
              }}
            >
              {page.arabic}
            </div>

            {/* Title */}
            <h2
              className="text-3xl sm:text-4xl lg:text-[2.75rem] font-serif font-bold text-white leading-tight"
              style={{ textShadow: "0 2px 8px rgba(0,0,0,0.4)" }}
            >
              {page.title}
            </h2>

            {/* Divider */}
            <div
              className="w-14 h-px"
              style={{
                background: `linear-gradient(to right, ${page.accent}, transparent)`,
                boxShadow: `0 0 6px ${page.accent}`,
              }}
            />

            {/* Subtitle */}
            <p className="text-white/60 text-base sm:text-lg leading-relaxed max-w-md font-light">
              {page.subtitle}
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

// ── Page counter display (uses a React state to avoid hook-in-JSX ──
function PageCounter({ pageIndex }: { pageIndex: MotionValue<number> }) {
  const [display, setDisplay] = useState(1);
  useEffect(() => {
    const unsub = pageIndex.on("change", (v) => {
      setDisplay(Math.min(Math.floor(v) + 1, PAGES.length));
    });
    return unsub;
  }, [pageIndex]);
  return (
    <div className="absolute bottom-10 right-8 text-white/30 text-sm font-mono tabular-nums select-none">
      {display} / {PAGES.length}
    </div>
  );
}

// ── Progress bar ──
function ProgressBar({ smoothProgress }: { smoothProgress: MotionValue<number> }) {
  const width = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);
  return (
    <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white/10">
      <motion.div
        className="h-full bg-[#1d9aaf]"
        style={{ width, boxShadow: "0 0 8px rgba(29,154,175,0.9)" }}
      />
    </div>
  );
}

// ── Main export ──
export default function QuranScrollStory() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 22,
    mass: 0.4,
  });

  const pageIndex = useTransform(smoothProgress, [0, 1], [0, PAGES.length - 0.001]);

  return (
    <section className="relative" style={{ background: "#071e28" }}>
      {/* ── Top wave separator (inverted, light-to-dark) ── */}
      <div className="relative overflow-hidden" style={{ height: 80 }}>
        <svg
          className="absolute bottom-0 w-full fill-[#071e28]"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
        >
          <path d="M0,0 C360,80 720,0 1080,80 C1260,120 1380,40 1440,80 L1440,80 L0,80 Z" />
        </svg>
      </div>

      {/* ── 500vh sticky scroll container ── */}
      <div ref={containerRef} style={{ height: "500vh" }} className="relative">
        <div
          className="sticky top-0 h-screen overflow-hidden"
          style={{ background: "#071e28" }}
        >
          {/* Ambient glow background */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0c4a60]/70 via-[#071e28] to-[#071e28]" />
            <div
              className="absolute inset-0"
              style={{
                background: "radial-gradient(ellipse 70% 60% at 50% 30%, rgba(29,154,175,0.1), transparent)",
              }}
            />
          </div>

          {/* All 5 pages stacked, each fades in/out on scroll */}
          {PAGES.map((page, i) => (
            <StoryPage key={page.key} page={page} index={i} smoothProgress={smoothProgress} />
          ))}

          <PageCounter pageIndex={pageIndex} />
          <ProgressBar smoothProgress={smoothProgress} />
        </div>
      </div>

      {/* ── Bottom wave separator (dark-to-light) ── */}
      <div className="relative overflow-hidden" style={{ height: 80 }}>
        <svg
          className="absolute top-0 w-full fill-quaf-light"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
        >
          <path d="M0,80 C360,0 720,80 1080,0 C1260,-20 1380,40 1440,0 L1440,0 L0,0 Z" />
        </svg>
      </div>
    </section>
  );
}
