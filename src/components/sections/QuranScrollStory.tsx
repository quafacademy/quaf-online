"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useSpring, useTransform, MotionValue } from "framer-motion";

const PAGES = [
  { key: "start", arabic: "بِسْمِ اللهِ", label: "Bismillah", title: "Begin Your Journey", subtitle: "A sincere intention opens every door. The journey of a thousand recitations begins with one step.", step: 1 },
  { key: "recite", arabic: "اقْرَأْ", label: "Iqra'", title: "Learn to Recite with Accuracy", subtitle: "Master the letters, sounds, and rules that bring the Qur'an to life on your tongue.", step: 2 },
  { key: "tajweed", arabic: "تَجْوِيد", label: "Tajweed", title: "Improve Your Tajweed", subtitle: "Give every letter its due right — beautify your recitation the way the Prophet ﷺ taught.", step: 3 },
  { key: "fluency", arabic: "طَلَاقَة", label: "Talaqah", title: "Develop Fluency", subtitle: "Flow through the verses with ease, confidence, and a rhythm that touches the heart.", step: 4 },
  { key: "reflect", arabic: "تَدَبُّر", label: "Tadabbur", title: "Understand & Reflect", subtitle: "Let the meanings illuminate your heart. The Qur'an is guidance, light, and mercy.", step: 5 },
];

const BackPattern = () => (
  <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="opacity-[0.07]">
    <defs>
      <pattern id="geo" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
        <polygon points="30,2 58,15 58,45 30,58 2,45 2,15" fill="none" stroke="#0f5f77" strokeWidth="0.8" />
        <polygon points="30,12 48,21 48,39 30,48 12,39 12,21" fill="none" stroke="#1d9aaf" strokeWidth="0.4" />
        <circle cx="30" cy="30" r="3" fill="none" stroke="#0f5f77" strokeWidth="0.5" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#geo)" />
  </svg>
);

// ── Book Page (3D flip for all screens) ──
function BookPage({ page, index, total, smoothProgress }: {
  page: (typeof PAGES)[0]; index: number; total: number; smoothProgress: MotionValue<number>;
}) {
  const start = index / total;
  const end = (index + 1) / total;
  const mid = (start + end) / 2;

  const rotateY = useTransform(smoothProgress, [start, end], [0, -180]);
  const scaleX = useTransform(smoothProgress, [start, mid, end], [1, 0.965, 1]);
  const shadowOpacity = useTransform(smoothProgress, [start, mid, end], [0, 0.55, 0]);
  const glowOpacity = useTransform(smoothProgress, [start, mid, end], [0, 0.35, 0]);

  const [zIndex, setZIndex] = useState(total - index);
  useEffect(() => {
    return smoothProgress.on("change", (v) => {
      if (v > start && v < end) setZIndex(total * 2 + 10);
      else if (v >= end) setZIndex(total + index);
      else setZIndex(total - index);
    });
  }, [smoothProgress, start, end, index, total]);

  return (
    <motion.div style={{ position: "absolute", inset: 0, transformStyle: "preserve-3d", transformOrigin: "left center", rotateY, scaleX, zIndex, willChange: "transform" }}>
      {/* Front face */}
      <div style={{ position: "absolute", inset: 0, backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}>
        <div className="relative w-full h-full overflow-hidden" style={{ background: "linear-gradient(160deg,#faf8f0,#f5f2e6)", borderRadius: "0 8px 8px 0", boxShadow: "inset -3px 0 10px rgba(0,0,0,0.06)" }}>
          <div className="absolute left-0 top-0 bottom-0 w-4 md:w-8 bg-gradient-to-r from-black/10 to-transparent pointer-events-none" />
          <motion.div className="absolute inset-0 pointer-events-none rounded-r-lg" style={{ background: "radial-gradient(ellipse 80% 60% at 60% 40%,rgba(29,154,175,0.18),transparent)", opacity: glowOpacity }} />
          <motion.div className="absolute inset-0 pointer-events-none rounded-r-lg bg-black" style={{ opacity: shadowOpacity }} />
          <div className="relative z-10 flex flex-col items-center justify-center h-full px-2 sm:px-10 py-4 sm:py-8 text-center">
            <div className="inline-flex items-center gap-1.5 md:gap-2 px-2 md:px-3 py-0.5 md:py-1 rounded-full mb-2 md:mb-4 border text-[9px] md:text-xs font-bold tracking-widest uppercase" style={{ background: "rgba(15,95,119,0.08)", borderColor: "rgba(15,95,119,0.2)", color: "#0f5f77" }}>
              <span className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full" style={{ background: "#1d9aaf", boxShadow: "0 0 6px rgba(29,154,175,0.8)" }} />
              Step {page.step} of {PAGES.length}
            </div>
            <div className="font-cursive leading-none mb-1.5 md:mb-3 text-[2.2rem] md:text-[clamp(2.8rem,9vw,5rem)]" style={{ color: "#0f5f77", textShadow: "0 0 30px rgba(29,154,175,0.4),0 2px 4px rgba(0,0,0,0.08)" }}>{page.arabic}</div>
            <div className="text-[10px] md:text-sm text-quaf-secondary/70 font-medium italic mb-2 md:mb-3">{page.label}</div>
            <div className="w-8 md:w-12 h-px mb-2 md:mb-4" style={{ background: "linear-gradient(to right,transparent,#1d9aaf,transparent)", boxShadow: "0 0 6px rgba(29,154,175,0.6)" }} />
            <h3 className="font-serif font-bold text-quaf-dark mb-1.5 md:mb-3 leading-tight text-[0.85rem] sm:text-[clamp(1.1rem,3vw,1.8rem)] px-2">{page.title}</h3>
            <p className="text-quaf-dark/60 leading-relaxed font-light text-[0.65rem] md:text-[clamp(0.78rem,1.8vw,0.95rem)] px-1 md:px-0" style={{ maxWidth: "26ch" }}>{page.subtitle}</p>
            <div className="absolute top-2 left-2 md:top-4 md:left-4 w-4 h-4 md:w-7 md:h-7 border-t border-l border-quaf-primary/15 rounded-tl-lg" />
            <div className="absolute bottom-2 right-2 md:bottom-4 md:right-4 w-4 h-4 md:w-7 md:h-7 border-b border-r border-quaf-primary/15 rounded-br-lg" />
          </div>
        </div>
      </div>
      {/* Back face */}
      <div style={{ position: "absolute", inset: 0, backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden", transform: "rotateY(180deg)", background: "linear-gradient(160deg,#f0ede0,#e8e4d4)", borderRadius: "8px 0 0 8px" }}>
        <BackPattern />
        <div className="absolute inset-0 flex items-center justify-center opacity-15">
          <div className="font-cursive text-3xl md:text-5xl text-quaf-primary">القرآن</div>
        </div>
        <div className="absolute right-0 top-0 bottom-0 w-4 md:w-6 bg-gradient-to-l from-black/10 to-transparent" />
      </div>
    </motion.div>
  );
}

function ProgressBar({ smoothProgress }: { smoothProgress: MotionValue<number> }) {
  const width = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);
  return (
    <div className="absolute bottom-0 left-0 w-full h-[3px] bg-white/10 z-50">
      <motion.div className="h-full" style={{ width, background: "linear-gradient(to right,#0f5f77,#1d9aaf)", boxShadow: "0 0 8px rgba(29,154,175,0.8)" }} />
    </div>
  );
}

function PageCounter({ smoothProgress, total }: { smoothProgress: MotionValue<number>; total: number }) {
  const [current, setCurrent] = useState(1);
  useEffect(() => smoothProgress.on("change", (v) => setCurrent(Math.min(Math.floor(v * total) + 1, total))), [smoothProgress, total]);
  return <div className="absolute bottom-6 md:bottom-8 right-4 md:right-6 z-50 text-white/25 text-xs md:text-sm font-mono tabular-nums select-none">{current} / {total}</div>;
}

// ── Main export ──
export default function QuranScrollStory() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 60, damping: 22, mass: 0.8 });
  const ambientGlow = useTransform(smoothProgress, (v) => { const p = (v * PAGES.length) % 1; return 1 - Math.abs(p - 0.5) * 1.6; });

  return (
    <section 
      className="relative bg-[#071e28]" 
      style={{ background: "linear-gradient(to bottom, #0f5f77, #071e28 15%, #071e28 85%, #0f5f77)" }}
    >
      {/* ── UNIFIED STICKY SCROLL VIEW ── */}
      <div ref={containerRef} className="w-full" style={{ height: "500vh" }}>
        <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
          
          {/* Ambient Glow */}
          <motion.div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 50%,rgba(29,154,175,0.12),transparent)", opacity: ambientGlow }} />

          {/* Top wave */}
          <div className="absolute top-0 left-0 w-full overflow-hidden" style={{ height: 70 }}>
            <svg className="absolute top-0 w-full fill-quaf-light" viewBox="0 0 1440 70" preserveAspectRatio="none">
              <path d="M0,35 C360,70 720,0 1080,35 C1260,53 1380,18 1440,35 L1440,0 L0,0 Z" />
            </svg>
          </div>

          {/* Header */}
          <div className="absolute top-24 md:top-20 text-center px-4 z-20 w-full">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-2" style={{ textShadow: "0 0 30px rgba(29,154,175,0.4)" }}>
              Journey Through the Qur&apos;an
            </h2>
            <p className="text-white/50 font-light tracking-wide text-xs md:text-base">
              Scroll slowly to progress
            </p>
          </div>

          {/* ── Book container (Responsive) ── */}
          <div className="relative z-10 mt-16 md:mt-16 w-[94vw] h-[360px] md:w-[min(840px,90vw)] md:h-[min(520px,65vh)]" style={{ perspective: "1800px" }}>
            <div className="absolute inset-0 rounded-xl pointer-events-none -z-10" style={{ boxShadow: "0 0 80px rgba(29,154,175,0.18),0 40px 80px rgba(0,0,0,0.5)" }} />

            <div className="absolute left-0 top-0 w-1/2 h-full rounded-l-xl overflow-hidden" style={{ background: "linear-gradient(160deg,#1a0f0a,#2a1a10)" }}>
              <BackPattern />
              <div className="absolute inset-0 flex items-center justify-center opacity-15">
                <div className="font-cursive text-3xl md:text-5xl text-quaf-secondary leading-none">بِسْمِ اللهِ</div>
              </div>
              <div className="absolute right-0 top-0 bottom-0 w-6 md:w-12 bg-gradient-to-l from-black/50 to-transparent" />
            </div>

            <div className="absolute top-0 right-0 w-1/2 h-full" style={{ transformStyle: "preserve-3d" }}>
              {PAGES.map((page, i) => (
                <BookPage key={page.key} page={page} index={i} total={PAGES.length} smoothProgress={smoothProgress} />
              ))}
            </div>

            <div className="absolute top-0 bottom-0 z-50 w-1.5 md:w-2.5" style={{ left: "calc(50% - 3px)", background: "linear-gradient(to right,#0a3a4a,#0f5f77 40%,#1d9aaf 50%,#0f5f77 60%,#071e28)", boxShadow: "0 0 20px rgba(29,154,175,0.6),-4px 0 16px rgba(0,0,0,0.4),4px 0 16px rgba(0,0,0,0.4)" }} />
            <div className="absolute top-0 left-0 right-0 h-1 md:h-1.5 z-40 rounded-t-sm" style={{ background: "linear-gradient(to bottom,rgba(255,255,255,0.06),transparent)" }} />
            <div className="absolute bottom-0 left-0 right-0 h-1 md:h-1.5 z-40 rounded-b-sm" style={{ background: "linear-gradient(to top,rgba(0,0,0,0.2),transparent)" }} />
          </div>

          {/* Scroll hint */}
          <motion.div className="absolute bottom-16 md:bottom-[90px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 md:gap-2" style={{ opacity: useTransform(smoothProgress, [0, 0.08], [1, 0]) }}>
            <div className="text-white/30 text-[10px] md:text-xs tracking-[0.2em] uppercase">Scroll</div>
            <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }} className="w-3 md:w-4 h-5 md:h-6 border border-white/20 rounded-full flex items-start justify-center p-1">
              <div className="w-1 h-1 md:h-1.5 bg-white/40 rounded-full" />
            </motion.div>
          </motion.div>

          <PageCounter smoothProgress={smoothProgress} total={PAGES.length} />
          <ProgressBar smoothProgress={smoothProgress} />

          {/* Bottom wave */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden" style={{ height: 70 }}>
            <svg className="absolute bottom-0 w-full fill-quaf-light" viewBox="0 0 1440 70" preserveAspectRatio="none">
              <path d="M0,35 C360,0 720,70 1080,35 C1260,17 1380,52 1440,35 L1440,70 L0,70 Z" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
