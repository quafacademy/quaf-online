"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Sparkles, BookOpen, Globe, Briefcase } from "lucide-react";

export default function Careers() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 0.5, 0.2]);

  const benefits = [
    { icon: <BookOpen />, title: "Continuous Learning", desc: "Access to all QUAF advanced courses and exclusive scholar sessions." },
    { icon: <Globe />, title: "Global Impact", desc: "Help thousands worldwide connect deeply with the Qur'an." },
    { icon: <Sparkles />, title: "Spiritual Growth", desc: "Work in an environment where your faith and profession align beautifully." }
  ];

  const roles = [
    {
      title: "Senior Tajweed Instructor",
      type: "Full-Time",
      location: "Remote",
      desc: "Lead advanced pronunciation classes and mentor junior instructors.",
    },
    {
      title: "Curriculum Developer",
      type: "Part-Time",
      location: "Remote",
      desc: "Design structured, engaging lesson plans for our new interactive portal.",
    },
    {
      title: "Community Manager",
      type: "Full-Time",
      location: "Hybrid",
      desc: "Foster engagement, organize events, and support our growing student base.",
    }
  ];

  return (
    <section id="careers" ref={containerRef} className="relative py-24 md:py-32 bg-[#071e28] overflow-hidden">
      {/* Background Decor */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        style={{ 
          background: "radial-gradient(circle at 50% 0%, rgba(29, 154, 175, 0.1), transparent 60%)",
          y: bgY,
          opacity: glowOpacity 
        }}
      />
      
      {/* Large ambient blur circles */}
      <div className="absolute top-40 -left-40 w-96 h-96 bg-quaf-primary/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 -right-20 w-80 h-80 bg-[#1d9aaf]/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Intro & Benefits */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1d9aaf]/10 border border-[#1d9aaf]/20 mb-6">
                <Briefcase className="w-4 h-4 text-quaf-secondary" />
                <span className="text-xs font-bold tracking-widest text-quaf-secondary uppercase">Careers</span>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
                Join Our Team
              </h2>
              <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-12 max-w-lg font-light">
                We are building the future of Qur&apos;anic education. Join a team of passionate educators, creators, and visionaries dedicated to making the Book of Allah accessible to all.
              </p>
            </motion.div>

            <div className="space-y-6">
              {benefits.map((benefit, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="flex gap-5 items-start"
                >
                  <div className="shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-[#0f5f77] to-[#071e28] flex items-center justify-center text-quaf-secondary border border-white/5 shadow-lg">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">{benefit.title}</h4>
                    <p className="text-white/50 text-sm leading-relaxed max-w-sm font-light">
                      {benefit.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Open Roles */}
          <div className="relative">
            {/* Glass container for roles */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 sm:p-8 shadow-xl"
            >
              <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-6">
                <h3 className="text-2xl font-serif font-bold text-white">Open Positions</h3>
                <span className="text-quaf-secondary text-sm font-medium bg-[#1d9aaf]/10 px-3 py-1 rounded-full">{roles.length} Roles</span>
              </div>

                <div className="space-y-4">
                  {roles.map((role, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.06)" }}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      className="group cursor-pointer p-5 rounded-2xl border border-white/5 bg-white/5 transition-colors"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="text-white font-bold text-lg group-hover:text-quaf-secondary transition-colors">
                          {role.title}
                        </h4>
                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-quaf-secondary group-hover:text-quaf-dark transition-colors">
                          <ArrowUpRight className="w-4 h-4 text-white/50 group-hover:text-quaf-dark transition-colors" />
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="text-xs font-medium text-quaf-secondary/80 bg-quaf-secondary/10 px-2 py-1 rounded-md">
                          {role.type}
                        </span>
                        <span className="text-xs font-medium text-white/50 bg-white/5 px-2 py-1 rounded-md">
                          {role.location}
                        </span>
                      </div>
                      <p className="text-white/40 text-sm font-light leading-relaxed group-hover:text-white/60 transition-colors">
                        {role.desc}
                      </p>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 text-center pt-6 border-t border-white/10">
                  <p className="text-white/50 text-sm mb-4">Don&apos;t see a perfect fit?</p>
                  <button className="text-quaf-secondary text-sm font-bold hover:text-white transition-colors uppercase tracking-wider">
                    Send Open Application
                  </button>
                </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
